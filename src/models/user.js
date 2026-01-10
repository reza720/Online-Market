const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const User=sequelize.define("User",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, validate:{
        is:{
            args:[/^[a-zA-Z ]+$/],
            msg:"name should be letter and space",
        },
        notEmpty:{
            args:true,
            msg:"name can not be empty",
        },
    }},
    phone:{type:DataTypes.STRING, allowNull:false,validate:{
        isNumeric:{
            args:true,
            msg:"phone number should be numbers",
        },
        len:{
            args:[10,10],
            msg:"phone number should be 10 digits",
        }
    }},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]},
        {unique:true, fields:["phone","deletedAt"]}
    ]
});
module.exports=User;
