const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(
    "Online_Market",
    "root",
    "root",
    {
        host:"localhost",
        dialect:"mysql",
        logging:false,
    }
);
module.exports=sequelize;