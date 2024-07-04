const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const path = require("path");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));



I am writing to express my strong interest in the SDE position at Riot. As a recent graduate of Indian Institute of Information Technology, Allahabad with a BTech in Information Technology, I am excited to kickstart my career journey and believe that my passion, dedication, and eagerness to learn align perfectly with the values and vision of Riot. Throughout my academic journey, I have acquired a solid foundation in C++, Data Structure and Algorithm, Operating System, OOPS, DBMS, Cloud computing, System Design. My coursework not only provided me with theoretical knowledge but also equipped me with hands-on experience through various projects. I am confident that the skills I have developed, makes me a strong candidate for this role. I am highly motivated and adaptable, eager to take on new challenges and quickly learn and grow within the organisation. I am a team player with excellent communication and interpersonal skills, which I honed through group projects and extracurricular activities during my studies. I am particularly impressed with Riot's commitment to innovation and its reputation as an employer that values talent development and fosters a positive work environment. I am excited about the opportunity to contribute my fresh perspective and innovative ideas to the team. I am genuinely passionate about Software Engineering, and I firmly believe that Riot is the ideal place for me to begin my career journey. I am committed to making a meaningful impact and contributing to the success of the organisation. I am excited about the possibility of joining Riot and would be honoured to discuss how my skills and enthusiasm can benefit your team. Thank you for considering my application. I would appreciate the opportunity to speak with you further. You can reach me at 7717385112 or rajatkumard36@gmail.com. Thank you for your time and consideration. Sincerely, Rajat Kumar