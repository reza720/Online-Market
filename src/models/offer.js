const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Offer=sequelize.define("Offer",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    userId:{type:DataTypes.INTEGER, allowNull:false},
    itemId:{type:DataTypes.INTEGER, allowNull:false},
    date:{type:DataTypes.DATEONLY, allowNull:false, defaultValue:DataTypes.NOW},
},{
    timestamps:true,
});
module.exports=Offer;