const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Item=sequelize.define("Item",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    ownerId:{type:DataTypes.INTEGER, allowNull:false},
    info:{type:DataTypes.TEXT, allowNull:true},
    price:{type:DataTypes.DECIMAL(10,2), allowNull:false},
    imageURL:{type:DataTypes.STRING, allowNull:true},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]},
    ]
});
module.exports=Item;