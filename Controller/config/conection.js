const mongoose = require('mongoose');
const data=()=>{ mongoose.connect('mongodb+srv://irshadalike:irshad111@cluster0.cwnzwvu.mongodb.net/employee', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
}).then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.error("Error in DB connection:", err);
});
}

module.exports=data