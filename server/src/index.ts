import express, { Application } from "express";
import api from "./routes/api";

const app: Application = express();
const port = 8000;

// middleware declarations here

// routers set here.
app.use("/todo", api);
app.use("/auth", api);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
