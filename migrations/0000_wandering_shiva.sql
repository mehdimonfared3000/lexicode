CREATE TABLE IF NOT EXISTS "to-do-list" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" varchar(255) NOT NULL,
	"completed" boolean NOT NULL
);
