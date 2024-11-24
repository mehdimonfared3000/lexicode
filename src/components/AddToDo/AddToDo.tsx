"use client";
import { ChangeEvent, FormEvent, forwardRef, useState } from "react";

interface Props {
  createTodo: (value: string) => void;
}

export const AddToDo = forwardRef<HTMLInputElement, Props>(
  ({ createTodo }, ref) => {
    const [input, setInput] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    };

    const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (input.trim()) {
        createTodo(input);
        setInput("");
      }
    };

    return (
      <form className="w-full flex gap-1 mt-2" onSubmit={handleAdd}>
        <input
          type="text"
          className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
          onChange={handleInput}
          value={input}
          ref={ref}
        />
        <button
          className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
          type="submit"
        >
          Add
        </button>
      </form>
    );
  }
);

AddToDo.displayName = "AddToDo";
