const mongoose = require("mongoose");
// const PORT = 4000;
// app.use(cors());
const uri =
  "mongodb+srv://user:user1@urlshortner.qbreh.mongodb.net/urlshort?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const Person = mongoose.model("Person", { name: String });

const person = new Person({ name: "Trey" });
person.save().then(() => console.log("hit"));
// app.listen(PORT, function () {
//   console.log("Server is running on Port: " + PORT);
// });
