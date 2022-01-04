const APP = (() => {
    const TODOS = [];
    const LISTS = [];
    let _projects;

    // module level functions
    function getProjects() {
        const projects = [];
        for (let i=0; i < LISTS.length; i++) {
            let list = LISTS[i];
            if (list instanceof Project) {
                projects.push(list);
            }
        }
        return projects;
    };
    function setAllTodos() {
        for (let i=0; i < LISTS.length; i++) {
            const list = LISTS[i];
            list.setTodos();
        }
    };

    // Shared Methods
    const hasID = {
        getID() {
            return this.id;
        }
    }
    const hasTitle = {
        getTitle() {
            return this.title;
        }
    }
    const hasBody = {
        getBody() {
            return this.body;
        }
    }

    // List Methods
    const hasTodos = {
        getTitle() {
            return this.title;
        },
        getCtTodos() {
            return this.todos.length;
        },
        getCtTodosCond(getComplete=false) {
            let ct = 0;
            const tds = this.todos;
            for (let i = 0; i < tds.length; i++) { 
                const td = tds[i];
                if (td.isComplete === getComplete) {
                    ct++;
                }
            }
            return ct;
        },
        addTodo(todo) {
            this.todos.push(todo);
        },
    }

    // ToDo Methods
    const hasDueDate = {
        // parenthesis' required to return an object literal exp.
        getDueDate() {
            return this.dueDate;
        }
    }
    const hasPriority = {
        getPriority() {
            return this.priority;
        }
    }
    const hasTasks = {
        getTasks() {
            return this.tasks;
        },
        getCtTasksCond(getComplete=false) {
            let ct = 0;
            const tasks = this.getTasks();
            for (let i = 0; i < tasks.length; i++) { 
                const task = tasks[i];
                if (task.isComplete === getComplete) {
                    ct++;
                }
            }
            return ct;
        },
        addTask(task) {
            this.tasks.push(task);
        }
    }
    const hasNotes = {
        getNotes() {
            return this.notes;
        }
    }

    const hasProject = {
        getProject() {
            return this.project;
        }
    }

    // CLASS DEFINITIONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function mixin(rcvr, ...splrs) {
        Object.assign(rcvr, ...splrs);
        return rcvr;
    }
    // Task
    function Task(title='New Task', isComplete=false) {
        this.title = title;
        this.isComplete  = isComplete;
    }
    mixin(Task.prototype, hasTitle, {constructor: Task})

    // Todo
    function Todo(title='New Todo', priority='low', dueDate, isComplete=false, tasks=Array(), notes='', project) {
        this.title = title;
        this.priority    = priority;
        this.dueDate     = dueDate;
        this.isComplete  = isComplete;
        this.tasks       = tasks;
        this.notes       = notes;
        this.project     = project;

        TODOS.push(this);
    }
    mixin(Todo.prototype, hasTitle, hasPriority, hasDueDate, hasTasks, hasNotes, hasProject, {constructor: Todo});

    function List(title='New List', todos=Array()) {
        this.title  = title;
        this._todos = todos;

        Object.defineProperty(this, 'todos', {
            get() {
                this.setTodos();
                return this._todos;
            },
            set(todos) {
                this._todos = todos;
            }
        });

        LISTS.push(this);
    }
    mixin(List.prototype, hasTitle, hasTodos, {constructor: List});

    // Project
    function Project(title='New Project', todos=Array()) {
        List.apply(this, [title, todos]);
    }
    Project.prototype = Object.create(List.prototype, {
        constructor: {
            configurable: true,
            enumerable: true,
            value: Project,
            writable: true,
        }
    })
    Project.prototype.setTodos = function() {
        const that = this;
        const projTitle = that.title;
        const myTodos = [];
        TODOS.forEach(function(todo) {
            if (todo.getProject() === projTitle) {
                myTodos.push(todo);
            }
        })
        that.todos = myTodos;
    }

    // Module level functions
    function getLists() {
        return LISTS;
    }
    function getTodos() {
        return TODOS;
    }
    function delTodo(todo) {
        const index = TODOS.findIndex(todo);
        TODOS.splice(index, 1);
    }
    function delList(list) {
        const index = LISTS.findIndex(list);
        LISTS.splice(index, 1);
    }
    return {Project, Todo, Task, getLists, getTodos}
})();

export default APP;