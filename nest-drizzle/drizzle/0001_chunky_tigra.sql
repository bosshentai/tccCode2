DO $$ BEGIN
 CREATE TYPE "roles" AS ENUM('MANAGER', 'EMPLOYEE', 'CLIENT', 'PERSONALTRAINER', 'UNKNOWN');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
