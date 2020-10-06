const mongoose = require("mongoose");
// const PORT = 4000;
// app.use(cors());
//adds database login info to uri
const uri =
  "mongodb+srv://user:user1@urlshortner.qbreh.mongodb.net/urlshort?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
//creates variable addUser for collection layout of acceptable inputs
const addUser = mongoose.model("Person", { name: String, number: String });
// stores the added user into person variable with the inputs and saves to the database than checks the promise
const person = new addUser({ name: "Trey", number: "26" });
person.save().then(() => console.log("hit"));
// app.listen(PORT, function () {
//   console.log("Server is running on Port: " + PORT);
// });
