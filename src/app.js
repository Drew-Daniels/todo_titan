import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

const APP = (() => {
  const TODOS = [];
  const PROJECTS = [];
  const TASKS = [];

  // module level functions
  /**
   * Returns all Project objects kept in App memory
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
  /**
   * Returns all Todo objects kept in App memory
   * @returns TODOS
   */
  function getTodos() {
    return TODOS;
  }

  function getTodoIDs(projectID) {
    const project = getProject(projectID);
    const todoIDs = project.getTodoIDs();
    todoIDs.forEach(function(todoID) {
      todoIDs.push(todoID);
    })
    return todoIDs;
  }
  /** Returns a Todo instance with the specified Todo ID */
  function getTodo(todoID) {
    let todoObj = getByID(todoID, TODOS);
    return todoObj;
  }

  /**
   * Returns all Task objects kept in App memory
   * @returns TASKS
   */
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
  /**
   * Deletes a Task object from TASKS array (App memory)
   * @param {*} taskID 
   */
  function delTask(taskID) {
    deleteByID(taskID, TASKS);
  }
  /**
   * Recursively deletes a Todo, along with all Tasks belonging to it
   * @param {*} todoID 
   */
  function delTodo(todoID) {
    const todo = getTodo(todoID);
    const tasks = todo.getTasks();
    tasks.forEach(function(task) {
      delTask(task.getID());
    })
    deleteByID(todoID, TODOS);
  }
  /**
   * Recursively deletes a Project, along with all Todos belonging to it, and all Task objects that point to those Todo objects
   * @param {*} projectID 
   */
  function delProject(projectID) {
    // FIRST delete all todos belonging to this project
    const project = getProject(projectID);
    const todos = project.getTodos();
    todos.forEach(function(todo) {
      const tasks = todo.getTasks();
      tasks.forEach(function(task) {
        delTask(task.getID());
      })
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
  const hasTodoChildren = {
    getTitle() {
      return this.title;
    },
    getTodos() {
      const projectID = this.getID();
      const todos = new Array();
      TODOS.forEach(function(todo) {
        const parentID = todo.getProjectID();
        if (parentID === projectID) {
          todos.push(todo);
        }
      })
      return todos;
    },
    getTodoIDs() {
      const todos = this.getTodos();
      const todoIDs = new Array();
      todos.forEach(function(todo) {
        const todoID = todo.getID();
        todoIDs.push(todoID);
      })
      return todoIDs;
    },
    getCtTodos() {
      const todos = this.getTodos();
      const numTodos = todos.length;
      return numTodos;
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
      const todos = this.getTodos();
      for (let i=0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.isComplete === isCompleteCondition) {
          ct++;
        }
      }
      return ct;
    },
    addTodoID(todoID) {
      this.todoIDs.push(todoID);
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
  const hasTaskChildren = {
    getTasks() {
      const todoID = this.getID();
      const tasks = [];
      TASKS.forEach(function(task) {
        const parentID = task.getTodoID();
        if (parentID === todoID) {
          tasks.push(task);
        }
      })
      return tasks;
    },
    getTaskIDs() {
      const tasks = this.getTasks();
      const taskIDs = new Array();
      tasks.forEach(function(task) {
        const taskID = task.getID();
        taskIDs.push(taskID);
      })
      return taskIDs;
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

  const hasProjectParent = {
    getProjectID() {
      return this.projectID;
    },
  }

  // TASK Methods
  const hasTodoParent = {
    getTodoID() {
      return this.todoID;
    }
  }

  // CLASS DEFINITIONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function mixin(rcvr, ...splrs) {
    Object.assign(rcvr, ...splrs);
    return rcvr;
  }
  // Task
  function Task(title='New Task', isComplete=false, todoID, id=("i" + uuidv4())) {
    this.title = title;
    this.isComplete  = isComplete;
    this.todoID = todoID;
    this.id = id;

    TASKS.push(this);
  }
  mixin(Task.prototype, hasID, hasTitle, hasTodoParent, {constructor: Task})

  // Todo
  function Todo(title='New Todo', priority='low', dueDate=format(new Date(), 'yyyy-MM-dd'), isComplete=false, notes='', projectID, id=("i" + uuidv4())) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.notes = notes;
    this.projectID = projectID;
    this.id = id;

    TODOS.push(this);
  }
  mixin(Todo.prototype, hasID, hasTitle, hasPriority, hasDueDate, hasTaskChildren, hasNotes, hasProjectParent, {constructor: Todo});

  // Project
  function Project(title='New Project', id=("i" + uuidv4())) {
    this.title = title;
    this.id = id;
    
    PROJECTS.push(this);
  }

  mixin(Project.prototype, hasID, hasTitle, hasTodoChildren, {constructor: Project});

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
    delTask,
  }
})();

export default APP;