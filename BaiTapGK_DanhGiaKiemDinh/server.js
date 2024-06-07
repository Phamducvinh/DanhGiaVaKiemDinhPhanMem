import express from "express";
import cors from "cors";
import path from "path";
import Auth_User from "./Auth/login.js";
import Auth_UserSignUp from "./Auth/signup.js";

const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Đường dẫn tuyệt đối tới thư mục front-end
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "FrontEnd")));
app.use("/DkiBH", express.static(path.join(__dirname, "DkiBH")));
app.use("/KhaiBaoTT", express.static(path.join(__dirname, "KhaiBaoTT")));

// API Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = new Auth_User(username, password);

  if (user.isValidEmailAndPassword()) {
    res.status(200).send({ message: { success: "Valid User" } });
  } else {
    res.status(401).send({ message: { error: "Invalid User" } });
  }
});

// API Signup route
app.post("/signup", (req, res) => {
  const { username, password, confirmpassword } = req.body;
  const user = new Auth_UserSignUp(username, password, confirmpassword);

  if (user.isValidEmailAndPassword()) {
    res
      .status(200)
      .send({ message: { success: "User registered successfully" } });
  } else {
    res.status(400).send({ message: { error: "Invalid User" } });
  }
});

// API KhaiBaoTT route
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "FrontEnd", "home.html"));
});

// Khởi động server
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
