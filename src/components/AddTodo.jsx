import React from 'react';
import { connect } from 'react-redux';
import id from 'short-id';

import { ADD_TODO } from '../actions/index';

const AddTodo = ({ dispatch }) => {
    let input;
    return (
        <form>
            <input ref={item => { input = item; }} />
            <button type="button"
                    onClick={() => {
                         dispatch({
                             type: ADD_TODO,
                             text: input.value,
                             id: id.generate(),
                         });
                         input.value = '';
                     }}
            >+ Add todo</button>
        </form>
    )
}

export default connect()(AddTodo);