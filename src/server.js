require("dotenv").config();
const app=require("./app");
const database=require("./config/database");
const port=process.env.PORT || 3000;

(async ()=>{
    try{
        await database.authenticate();
        await database.sync();
        console.log("Database Connected");

        app.listen(port, ()=>{
            console.log(`app is running on the PORT: ${port}`);
        })
    }
    catch(error){
        console.error(error.message);
    }
})();