class TodoManager {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(title, description = "", priority = "medium") {
    const newTodo = {
      id: this.nextId++,
      title: title,
      description: description,
      priority: priority,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  completeTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = true;
      return true;
    }
    return false;
  }
}
