const sequelize = require("../config/database");

const User=require("./user");
const Item=require("./item");
const Offer=require("./offer");
const Deal=require("./deal");

User.hasMany(Item,{foreignKey:"ownerId"});
Item.belongsTo(User,{foreignKey:"ownerId", onDelete:"CASCADE"});

User.hasMany(Offer,{foreignKey:"userId"});
Offer.belongsTo(User,{foreignKey:"userId", onDelete:"CASCADE"});

Item.hasMany(Offer,{foreignKey:"itemId"});
Offer.belongsTo(Item,{foreignKey:"itemId"});

User.hasMany(Deal,{as:"buyer",foreignKey:"buyerId"});
User.hasMany(Deal,{as:"owner",foreignKey:"ownerId"});

Deal.belongsTo(User,{as:"buyer",foreignKey:"buyerId"});
Deal.belongsTo(User,{as:"owner",foreignKey:"ownerId"});

Item.hasOne(Deal,{foreignKey:"itemId"});
Deal.belongsTo(Item,{foreignKey:"itemId"});

module.exports = {
    User,
    Item,
    Offer,
    Deal
};
