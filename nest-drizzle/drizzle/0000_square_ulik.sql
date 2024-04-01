CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"birth_date" timestamp with time zone NOT NULL,
	"cni" varchar NOT NULL,
	"nif" varchar NOT NULL
);
