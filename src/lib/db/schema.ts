import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const toDoListTable = pgTable("to-do-list", {
  id: serial("id").primaryKey(),
  task: varchar({ length: 255 }).notNull(),
  completed: boolean().notNull(),
});
