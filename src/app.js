import { v4 as uuidv4 } from 'uuid';

const APP = (() => {
  const TODOS = [];
  const PROJECTS = [];

  // module level functions
  function getProjects() {
    return PROJECTS;
  }

  function getProject(desiredProjectID) {
    let projectObj;
    PROJECTS.forEach(function(project) {
      const currProjectID = project.getID();
      if (currProjectID === desiredProjectID) {
        projectObj = project;
      }
    })
    return projectObj;
  }

  function getTodos() {
    return TODOS;
  }

  function delTodo(todo) {
    const index = TODOS.findIndex(todo);
    TODOS.splice(index, 1);
  }

  function delProject(projectToDelete) {
    const srchID = projectToDelete.getID();
    for (let i=0; i < PROJECTS.length; i++) {
      const currID = PROJECTS[i].getID();
      if (currID === srchID) {
        PROJECTS.splice(i, 1);
      }
    }
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
    getCtTodos() {
      return this._todos.length;
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
  function Task(title='New Task', isComplete=false) {
    this.title = title;
    this.isComplete  = isComplete;
  }
  mixin(Task.prototype, hasTitle, {constructor: Task})

  // Todo
  function Todo(title='New Todo', priority='low', dueDate, isComplete=false, tasks=Array(), notes='', projectID) {
    this.id = uuidv4();
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
    // DEL
    delProject,
    delTodo,
  }
})();

export default APP;