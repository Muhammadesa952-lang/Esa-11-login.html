deleteTodo(id) {
        const index = this.todos.findIndex(t => t.id === id);
        if (index !== -1) {
            return this.todos.splice(index, 1)[0];
        }
        return null;
    }

    getPendingTodos() {
        return this.todos.filter(t => !t.completed);
    }

    getCompletedTodos() {
        return this.todos.filter(t => t.completed);
    }

    listAll() {
        return this.todos;
    }



// Example Usage
const manager = new TodoManager();
manager.addTodo("Learn JavaScript", "Practice coding daily", "high");
manager.addTodo("Build a project", "Create a small web app", "medium");
manager.completeTodo(1);
console.log("Pending:", manager.getPendingTodos());
console.log("Completed:", manager.getCompletedTodos());