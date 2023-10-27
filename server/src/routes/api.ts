import express, { Express, Request, Response, Application } from "express";
import pg from "pg";
const router = express.Router();

// postgress db connection here.
// this is just a test, none of these values will match the final result.
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "recipeguru",
  password: "lol",
  port: 5432,
});

router.get("/", (req: Request, res: Response) => {
  // logic here to get all notes
  // auth should be done before reaching this route.
  res.json({ message: "hello world" });
});

router.put("status/:id", (req: Request, res: Response) => {
  // logic here to update a note, we are just updating the status so not much logic here
});

router.delete("/:id", (req: Request, res: Response) => {
  // logic here to delete a note.
});

router.put("order/:id", (req: Request, res: Response) => {
  // logic here to update the order of the todos
});

export default router;
