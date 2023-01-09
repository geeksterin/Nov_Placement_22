const express = require("express");
const { generate } = require("short-uuid");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/auth", (req, res) => {
  const { email, password } = req.body;

  if (email === "john@example.com" && password === "admin") {
    return res.status(200).json({
      message: "auth success",
      token: generate(),
    });
  }

  return res.status(400).json({
    message: "email or password is incorrect",
  });
});

app.get("/profile", (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "unauthorized. please login or provide a valid token",
    });
  }

  //   if (authorization) {
  return res.status(200).json({
    message: "profile fetched successfully",
    profile: {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address: {
        city: "New York",
        state: "New York",
        country: "USA",
      },
      avatar: "https://i.pravatar.cc/300"
    },
  });
  //   }
});

app.listen(4500, () => {
  console.log("server is running on port 4500");
});
