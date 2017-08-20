import React from 'react';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Filters from './components/Filters';

const App = () => {
    return (
        <div>
            <h1>Redux-based Todo App</h1>
            <AddTodo />
            <TodoList />
            <Filters />
        </div>
    )
};

export default App;

