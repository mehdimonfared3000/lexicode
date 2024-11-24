"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../lib/db/db";
import { toDoListTable } from "../lib/db/schema";

export const getData = async () => {
  try {
    const data = await db.select().from(toDoListTable);
    return data;
  } catch (e) {
    throw new Error("Failed to fetch data", { cause: e });
  }
};

export const addTodo = async ({
  task,
  completed,
}: {
  task: string;
  completed: boolean;
}) => {
  const [todoItem] = await db
    .insert(toDoListTable)
    .values({
      task,
      completed,
    })
    .returning();

  revalidatePath("/tasks");
  return todoItem;
};

export const deleteTodo = async ({ id }: { id: number }) => {
  try {
    await db.delete(toDoListTable).where(eq(toDoListTable.id, id));
  } catch (e) {
    return {
      error: `Something went wrong when trying to delete the to do with id ${id}, error: ${e}`,
    };
  }

  revalidatePath("/tasks");
};

export const toggleTodo = async ({ id }: { id: number }) => {
  await db
    .update(toDoListTable)
    .set({
      completed: not(toDoListTable.completed),
    })
    .where(eq(toDoListTable.id, id));

  revalidatePath("/tasks");
};

export const editTodo = async ({ id, task }: { id: number; task: string }) => {
  await db
    .update(toDoListTable)
    .set({
      task,
    })
    .where(eq(toDoListTable.id, id));

  revalidatePath("/tasks");
};
