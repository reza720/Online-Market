const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const User=sequelize.define("User",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:false},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]},
        {unique:true, fields:["phone"]}
    ]
});
module.exports=User;
