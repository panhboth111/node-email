const express = require("express");
const cors = require("cors");
const sendEmail = require("./utilities/sendEmail");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  //the content of the message
  //change (to) to the email you want to send to
  var message = {
    from: "shelbytom119@gmail.com",
    to: "neakpanhboth18@kit.edu.kh",
    subject: "Welcome To Our App",
    text: "Thank you for registering into our app.",
  };
  //passing the message to our function and get the result (error or success info)
  const result = await sendEmail(message);
  return res.json(result);
});

//start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
