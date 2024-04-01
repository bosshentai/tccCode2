DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('ACTIVE', 'INACTIVE', 'BLOCKED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "refresh_tokens" (
	"id" uuid PRIMARY KEY NOT NULL,
	"expires_in" timestamp with time zone NOT NULL,
	"user_id" uuid NOT NULL
);
