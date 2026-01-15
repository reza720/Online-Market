const {ItemService}=require("../services");

class ItemController{
    static async createItem(req,res,next){
        try{
            const item=await ItemService.createItem(req.body);
            res.status(201).json({success:true, data:item});
        }
        catch(error){
            next(error);
        }
    }
    static async getItems(req,res,next){
        try{
            const items=await ItemService.getItems();
            res.status(200).json({success:true, data:items});
        }
        catch(error){
            next(error);
        }
    }
    static async getItemById(req,res,next){
        try{
            const item=await ItemService.getItemById(req.params.id);
            res.status(200).json({success:true, data:item});
        }
        catch(error){
            next(error);
        }
    }
    static async updateItem(req,res,next){
        try{
            const item=await ItemService.updateItem(req.params.id,req.body);
            res.status(200).json({success:true, data:item});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteItem(req,res,next){
        try{
            await ItemService.deleteItem(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=ItemController;