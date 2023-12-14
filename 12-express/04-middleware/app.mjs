import express from "express";
import morgan from "morgan";

const app = express();

// log info about request
app.use(morgan("tiny"));

// converts JSON to JS Object in POT, PUT, PATCH requets
app.use(express.json());

// converts form data to JS Object in POR, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  console.log(req.body);
  res.send("This is express server");
});

app.listen(5000, () => console.log("Server is listening at port 5000"));
