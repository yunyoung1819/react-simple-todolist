import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem done> 헬스가서 운동하기 </TodoItem>
                <TodoItem> 리액트 공부하기 </TodoItem>
                <TodoItem> 일본어 공부하기 </TodoItem>
                <TodoItem> 스프링 JPA 공부하기 </TodoItem>
                <TodoItem> 영어 공부하기 </TodoItem>
            </div>
        );
    }
}

export default TodoList;