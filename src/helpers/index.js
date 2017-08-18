const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL': {
            return todos;
        }
        case 'COMPLETED': {
            return todos.filter(todo => todo.completed);
        }
        case 'IN_PROGRESS': {
            return todos.filter(todo => !todo.completed);
        }
    }
}

export default filterTodos;