import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { LoadingIcon } from '../components/LoadingIcon';
import { TodoContext } from '../TodoContext';
import { Modal } from '../components/Modal';
import React from 'react';
import { CreateTodoForm } from '../components/CreateTodoForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        accomplishTodo,
        deleteTodo,
        openModal,
        searchValue
    } = React.useContext(TodoContext)

    return (
        <>
            <div className='container'>
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {loading && <LoadingIcon />}
                    {error && <p>Error!!!!!!</p>}
                    {(!loading &&  searchValue !== '' && searchedTodos.length === 0) && <p>La tarea que buscas no existe<br/>¡Puedes anotarla!</p>}
                    {(!loading && searchValue === '' &&searchedTodos.length === 0 ) && <p>¡Anota lo que quieras hacer!</p>}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => accomplishTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
                <CreateTodoButton />
                
                {openModal && (
                    <Modal>
                        <CreateTodoForm></CreateTodoForm>
                    </Modal>
                )}

            </div>
        </>
    );
}

export { AppUI }