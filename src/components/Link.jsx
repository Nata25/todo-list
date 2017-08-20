import React from 'react';
import { connect } from 'react-redux';

const Link = (props) => {
    if (props.filter === props.ownFilter) {
        return (
            <span>{props.children}</span>
        )
    }
    else {
        return (
            <a href="#"
               onClick={(event) => {
                   event.preventDefault();
                   props.onLinkClicked();
               }}>
                {props.children}
            </a>
        )
    }
};

const mapStateToProps = (state, ownProps) => ({
    filter: state.visibility,
    ownFilter: ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLinkClicked: () => {
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter,
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);