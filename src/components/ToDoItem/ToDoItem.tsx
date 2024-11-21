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

export function TodoItem({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}: TodoItemProps) {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // State for handling text input
  const [text, setText] = useState(todo.task);

  // State for handling "done" status
  const [isDone, setIsDone] = useState(todo.completed);

  // Event handler for text input change
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Event handler for toggling "done" status
  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todo.id, text);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setText(todo.task);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    deleteTodoItem(todo.id);
  };

  // Rendering the Todo component
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
