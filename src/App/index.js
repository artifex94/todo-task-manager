import React from 'react';
import './App.css'
import { useTodos } from './useTodos';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { LoadingIcon } from '../components/LoadingIcon';
import { Modal } from '../components/Modal';
import { CreateTodoForm } from '../components/CreateTodoForm';
import { TodoHeader } from '../components/TodoHeader';


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
      setOpenModal
  } = useTodos();

  return (
      <>
          <div className='container'>

              <TodoHeader>
                  <TodoCounter
                      totalTodos={totalTodos}
                      completedTodos={completedTodos}
                  />
                  <TodoSearch
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                  />
              </TodoHeader>

              <TodoList>
                  {loading && <LoadingIcon />}
                  {error && <p>Error!!!!!!</p>}
                  {(!loading && searchValue !== '' && searchedTodos.length === 0) && <p>La tarea que buscas no existe<br />¡Puedes anotarla!</p>}
                  {(!loading && searchValue === '' && searchedTodos.length === 0) && <p>¡Anota lo que quieras hacer!</p>}

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
      </>
  );
}

export default App;
