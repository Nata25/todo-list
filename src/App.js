import React from 'react';
import TodoList from './components/Todo';

const App = (props) => {
    return (
        <TodoList todos={props.todos} />
    );
};

export default App;
