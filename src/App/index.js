import React from 'react';
import './App.css'
import { useTodos } from './useTodos';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { ErrorIcon } from '../components/ErrorIcon';
import { LoadingIcon } from '../components/LoadingIcon';
import { Modal } from '../components/Modal';
import { CreateTodoForm } from '../components/CreateTodoForm';
import { TodoHeader } from '../components/TodoHeader';
import { EmptyTodos } from '../components/EmptyTodos';
import { EmptySearchedTodos } from '../components/EmptySearchedTodos';
import { ChangeAlert } from '../components/ChangeAlert';


function App() {
    const {
        loading,
        error,
        searchedTodos,
        accomplishTodo,
        deleteTodo,
        openModal,
        searchValue,
        setSearchValue,
        completedTodos,
        totalTodos,
        addTodo,
        setOpenModal,
        synchronizeTodos
    } = useTodos();

    return (
        <>
            <div className='container'>

                <TodoHeader loading={loading}>
                    <TodoCounter
                        totalTodos={totalTodos}
                        completedTodos={completedTodos}
                    />
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </TodoHeader>

                <TodoList
                    error={error}
                    loading={loading}
                    searchedTodos={searchedTodos}
                    searchText={searchValue}
                    totalTodos={totalTodos}
                    onError={() => <ErrorIcon />}
                    onLoading={() => <LoadingIcon />}
                    onEmptyTodos={() => <EmptyTodos />}
                    onEmptySearchedTodos={(searchText) => <EmptySearchedTodos searchText={searchText} />}
                    render={todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => accomplishTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    )}
                >

                </TodoList>

                <CreateTodoButton
                    setOpenModal={setOpenModal}
                />

                {openModal && (
                    <Modal>
                        <CreateTodoForm
                            addTodo={addTodo}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                )}

            </div>

            <ChangeAlert
            synchronize={synchronizeTodos}
            />
        </>
    );
}

export default App;
