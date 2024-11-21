"use client";
import { useEffect, useState } from "react";
import { TodoType } from "@/types/toDoType";
import { TodoItem } from "../ToDoItem/ToDoItem";
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
  const [todoItems, setTodoItems] = useState<TodoType[]>(todos);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<TodoType[]>([]);

  const createTodo = async (task: string) => {
    const toDoItem: TodoType[] = await addTodo({ task, completed: false });
    setTodoItems((prev) => [...prev, ...toDoItem]);
  };

  const changeTodoText = (id: number, task: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, task } : todo))
    );
    editTodo({ id, task });
  };

  const toggleIsTodoDone = (id: number) => {
    setTodoItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toggleTodo({ id });
  };

  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo({ id });

    if (filteredItems.length === 1 && filteredItems[0].id === id) {
      setSearchTerm("");
      setFilteredItems(todoItems);
    } else {
      setFilteredItems((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchTerm(value);
    const filteredItems = todoItems.filter((item) =>
      item.task.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredItems(todoItems);
    }
  }, [searchTerm, todoItems]);

  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center pt-20">
      <div className="w-full flex justify-end items-center lg:max-w-[400px]">
        <p className="mr-2">Search: </p>
        <FuzzySearch value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <div>
        <div className="text-5xl font-medium">To-do app</div>
        <div className="w-full flex flex-col mt-8 gap-2">
          {/* Mapping through todoItems and rendering Todo component for each */}
          {filteredItems.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              changeTodoText={changeTodoText}
              toggleIsTodoDone={toggleIsTodoDone}
              deleteTodoItem={deleteTodoItem}
            />
          ))}
        </div>
        {/* Adding Todo component for creating new todos */}
        <AddToDo createTodo={createTodo} />
      </div>
    </main>
  );
}
