const express = require("express");
import  productRouter  from "./routes/productRouter";
// const usersRouter = require("./routers/usersRouter");
import { connectToDatabase } from "./services/database.service";
const app = express();
const port = 5000;


 connectToDatabase()
  .then(() => {
    app.use("/products", productRouter);
    // app.use("/users", usersRouter);
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    }); 
  }) 
  .catch((error: Error) => {
    console.error("Database connection failed", error);  
    process.exit(); 
  });
