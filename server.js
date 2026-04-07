
import "dotenv/config";
import app from "./src/app.js"
import  connectDB  from "./src/db/db.js";


const startServer = async () => {
  await connectDB();   // ✅ WAIT for DB

  app.listen(3000, () => {
    console.log("server is started");
  });
};

startServer();






