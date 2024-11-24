"use client";
import { useEffect, useState, useRef } from "react";
import { TodoType } from "@/types/toDoType";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { AddToDo } from "../AddToDo/AddToDo";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "@/actions/toDoActions";
import { FuzzySearch } from "../FuzzySearch/FuzzySearch";

interface Props {
  todos: TodoType[];
}

export function Todos({ todos }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todoItems, setTodoItems] = useState<Map<number, TodoType>>(
    new Map(todos.map((todo) => [todo.id, todo]))
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<Map<number, TodoType>>(
    new Map(todos.map((todo) => [todo.id, todo]))
  );

  const createTodo = async (task: string) => {
    const trimmedTask = task.trim().toLowerCase();
    if (trimmedTask === "") {
      inputRef.current?.focus();
      return;
    }

    const toDoItem: TodoType = await addTodo({
      task: trimmedTask,
      completed: false,
    });

    const newTodoItems = new Map(todoItems).set(toDoItem.id, toDoItem);
    setTodoItems(newTodoItems);

    const trimmedSearch = searchTerm.trim().toLowerCase();
    if (!trimmedSearch) {
      setFilteredItems(newTodoItems);
    } else if (trimmedTask.includes(trimmedSearch)) {
      setFilteredItems(new Map(filteredItems).set(toDoItem.id, toDoItem));
    }
    inputRef.current?.focus();
  };

  const changeTodoText = (id: number, task: string) => {
    setTodoItems((state) => {
      const toDoToUpdate = state.get(id);
      if (toDoToUpdate) {
        state.set(id, { ...toDoToUpdate, task });
      }
      return state;
    });
    editTodo({ id, task });
  };

  const toggleIsTodoDone = (id: number) => {
    setTodoItems((state) => {
      const itemToToggle = state.get(id);
      if (itemToToggle) {
        const newState = new Map(state);
        newState.set(id, {
          ...itemToToggle,
          completed: !itemToToggle.completed,
        });
        return newState;
      }
      return state;
    });
    toggleTodo({ id });
  };

  const deleteTodoItem = (id: number) => {
    try {
      const newState = new Map(todoItems);
      const filteredState = new Map(filteredItems);
      const toDoToDelete = newState.get(id);
      const filteredToDoToDelete = filteredState.get(id);
      if (toDoToDelete) {
        newState.delete(id);
        deleteTodo({ id });
        setTodoItems(newState);
      }
      if (filteredToDoToDelete) {
        filteredState.delete(id);
        setFilteredItems(filteredState);
      }

      if (filteredState.size === 0) {
        setSearchTerm("");
        setFilteredItems(newState);
      } else {
        setFilteredItems(filteredState);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      return;
    }

    const searchLowerCase = value.toLowerCase();

    const matchedItems = Array.from(todoItems.values()).filter((item) =>
      item.task.toLowerCase().includes(searchLowerCase)
    );

    setFilteredItems(new Map(matchedItems.map((item) => [item.id, item])));
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredItems(todoItems);
    }
  }, [searchTerm, todoItems]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center pt-20">
      <div className="w-full flex justify-end items-center lg:max-w-[400px]">
        <p className="mr-2">Search: </p>
        <FuzzySearch value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <div>
        <div className="text-5xl font-medium">To-do app</div>
        <div className="w-full flex flex-col mt-8 gap-2">
          {Array.from(filteredItems.entries()).map(([id, todo]) => (
            <ToDoItem
              key={id}
              todo={todo}
              changeTodoText={changeTodoText}
              toggleIsTodoDone={toggleIsTodoDone}
              deleteTodoItem={deleteTodoItem}
            />
          ))}
        </div>
        <AddToDo createTodo={createTodo} ref={inputRef} />
      </div>
    </main>
  );
}
