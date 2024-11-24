"use client";
import { ChangeEvent, useState } from "react";
import { TodoType } from "@/types/toDoType";
import { cn } from "@/lib/cn";
import { Button } from "../ui/button";

interface TodoItemProps {
  todo: TodoType;
  changeTodoText: (id: number, task: string) => void;
  toggleIsTodoDone: (id: number, completed: boolean) => void;
  deleteTodoItem: (id: number) => void;
}

export function ToDoItem({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}: TodoItemProps) {
  const [editing, setEditing] = useState(false);

  const [text, setText] = useState(todo.task);

  const [isDone, setIsDone] = useState(todo.completed);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    changeTodoText(todo.id, text);
    setEditing(false);
  };

  const handleDelete = () => {
    deleteTodoItem(todo.id);
  };

  return (
    <div className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
      <input
        type="checkbox"
        className="text-blue-200 rounded-sm h-4 w-4"
        checked={isDone}
        onChange={handleIsDone}
      />
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        onClick={handleEdit}
        readOnly={!editing}
        onBlur={handleSave}
        className={cn(
          "outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full",
          {
            "line-through": todo.completed && !editing,
          }
        )}
      />
      <div className="flex gap-1 ml-auto">
        <Button onClick={handleDelete} variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  );
}
