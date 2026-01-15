const {Item}=require("../models");

class ItemService{
    async createItem(data){
        return Item.create(data);
    }
    async getItems(){
        return Item.findAll();
    }
    async getItemById(id){
        const item=await Item.findByPk(id);
        if(!item){
            const err=new Error("Item not found");
            err.statusCode=404;
            throw err;
        }
        return item;
    }
    async updateItem(id,data){
        const item=await this.getItemById(id);
        await item.update(data);
        return item;
    }
    async deleteItem(id){
        const item=await this.getItemById(id);
        await item.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new ItemService();