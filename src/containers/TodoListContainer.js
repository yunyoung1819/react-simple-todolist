import React, {Component} from 'react';

class TodoListContainer extends Component {
    handleToggle = (id) => {
        const { TodosActions } = this.props;
        TodosActions.toggle(id);
    }

    handleRemove = (id) => {
        const { TodosActions } = this.props;
        TodosActions.remove(id);
    }
    render() {
        const { todos } = this.props;
        const { handleToggle, handleRemove } = this;

        return (
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}

export default TodoListContainer;