import { Router, Request, Response } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  // login logic here
  // auth should be done before reaching this route.
  res.json({ message: "this is the login route" });
});

router.post("/new-user", (req: Request, res: Response) => {
  // logic here to create a new user
  res.json({ message: "this is the new user route" });
});

export default router;
