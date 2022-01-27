import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

const APP = (() => {
  const TODOS = [];
  const PROJECTS = [];
  const TASKS = [];

  // module level functions
  /**
   * 
   * @returns PROJECTS
   */
  function getProjects() {
    return PROJECTS;
  }

  /** Returns a Project instance with the specified Project ID */
  function getProject(projectID) {
    let projectObj = getByID(projectID, PROJECTS);
    return projectObj;
  }

  function getTodos() {
    return TODOS;
  }

  function getTodoIDs(projectID) {
    const project = getProject(projectID);
    const todoIDs = [];
    const todos = project.getTodos();
    todos.forEach(function(todo) {
      const todoID = todo.getID();
      todoIDs.push(todoID);
    })
    return todoIDs;
  }
  /** Returns a Todo instance with the specified Todo ID */
  function getTodo(todoID) {
    let todoObj = getByID(todoID, TODOS);
    return todoObj;
  }

  function getTasks() {
    return TASKS;
  }

  function getTask(taskID) {
    let taskObj = getByID(taskID, TASKS);
    return taskObj;
  }

  function getByID(ID, array) {
    let obj;
    array.forEach(function(arrayItem) {
      const currID = arrayItem.getID();
      if (currID === ID) {
        obj = arrayItem;
      }
    })
    return obj;
  }

  function deleteByID(ID, array) {
    for (let i=0; i < array.length; i++) {
      const currID = array[i].getID();
      if (currID === ID) {
        array.splice(i, 1);
      }
    }
  }
  /** Deletes a Todo instance from TODOS array */
  function delTodo(todoID) {
    deleteByID(todoID, TODOS);
  }
  /** Deletes a Project instance from PROJECTS array */
  function delProject(projectID) {
    // FIRST delete all todos belonging to this project
    const project = getProject(projectID);
    const todos = project.getTodos();
    todos.forEach(function(todo) {
      delTodo(todo.getID());
    })
    // THEN delete the project itself
    deleteByID(projectID, PROJECTS);
  }

  // SHARED Methods
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

  // PROJECT Methods
  const hasTodos = {
    getTitle() {
      return this.title;
    },
    getTodos() {
      return this._todos;
    },
    getCtTodos() {
      return this._todos.length;
    },
    getCtTodosComplete() {
      return this.getCtTodosConditional(true);
    },
    getCtTodosIncomplete() {
      return this.getCtTodosConditional(false);
    },
    /**
     * 
     * @param {true | false} isCompleteCondition 
     * @returns Count of todos within a project instance that meet the specified condition of 'true' or 'false'
     */
    getCtTodosConditional(isCompleteCondition) {
      let ct = 0;
      const todos = this._todos;
      for (let i=0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.isComplete === isCompleteCondition) {
          ct++;
        }
      }
      return ct++;
    },
    addTodo(todo) {
      this._todos.push(todo);
    },
  }

  // TODO Methods
  const hasDueDate = {
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
    },
    addNotes(notes) {
      this.notes = notes;
    }
  }

  const hasProject = {
    getProjectID() {
      return this.projectID;
    },
    getProject() {
      return this.project;
    },
    setProject(projectID) {
      let projectObj;
      for (let i=0; i < PROJECTS.length; i++) {
        projectObj = PROJECTS[i];
        if (projectObj.getID() === projectID) {
          this.project = projectObj;
        }
      }
      // Ensure this todo is added to parent project's array of todos
      projectObj.push(this);
    }
  }

  // CLASS DEFINITIONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function mixin(rcvr, ...splrs) {
    Object.assign(rcvr, ...splrs);
    return rcvr;
  }
  // Task
  function Task(title='New Task', isComplete=false, todoID) {
    this.id = "i" + uuidv4();
    this.title = title;
    this.isComplete  = isComplete;
    this.todoID = todoID;

    TASKS.push(this);
  }
  mixin(Task.prototype, hasID, hasTitle, {constructor: Task})

  // Todo
  function Todo(title='New Todo', priority='low', dueDate=format(new Date(), 'yyyy-MM-dd'), isComplete=false, tasks=Array(), notes='', projectID) {
    this.id = "i" + uuidv4();
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.tasks = tasks;
    this.notes = notes;
    this.projectID = projectID;

    TODOS.push(this);
  }
  mixin(Todo.prototype, hasID, hasTitle, hasPriority, hasDueDate, hasTasks, hasNotes, hasProject, {constructor: Todo});

  // Project
  function Project(title='New Project', todos=Array()) {
    this.id = uuidv4()
    this.title = title;
    this._todos = todos;
    
    PROJECTS.push(this);
  }

  mixin(Project.prototype, hasID, hasTitle, hasTodos, {constructor: Project});

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

  return {
    Project, 
    Todo, 
    Task,
    // GET
    getProjects,
    getProject,
    getTodos,
    getTodo,
    getTodoIDs,
    getTasks,
    getTask,
    // DEL
    delProject,
    delTodo,
  }
})();

export default APP;