const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Deal=sequelize.define("Deal",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    itemId:{type:DataTypes.INTEGER, allowNull:false},
    ownerId:{type:DataTypes.INTEGER, allowNull:false},
    buyerId:{type:DataTypes.INTEGER, allowNull:false},
    date:{type:DataTypes.DATEONLY, allowNull:false, defaultValue: DataTypes.NOW},
},{
    timestamps:true
});
module.exports=Deal;