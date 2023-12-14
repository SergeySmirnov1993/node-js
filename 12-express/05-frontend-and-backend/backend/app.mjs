import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// log info about request
app.use(morgan("tiny"));

// converts JSON to JS Object in POT, PUT, PATCH requets
app.use(express.json());

// converts form data to JS Object in POR, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res) => {
  console.log(req.body);
  res.json({ name: "Sergey", isInstructor: true });
});

app.listen(5000, () => console.log("Server is listening at port 5000"));
