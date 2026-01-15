const {DealService}=require("../services");

class DealController{
    static async createDeal(req,res,next){
        try{
            const deal=await DealService.createDeal(req.body);
            res.status(201).json({success:true, data:deal});
        }
        catch(error){
            next(error);
        }
    }
    static async getDeals(req,res,next){
        try{
            const deals=await DealService.getDeals();
            res.status(200).json({success:true, data:deals});
        }
        catch(error){
            next(error);
        }
    }
    static async getDealById(req,res,next){
        try{
            const deal=await DealService.getDealById(req.params.id);
            res.status(200).json({success:true, data:deal});
        }
        catch(error){
            next(error);
        }
    }
    static async updateDeal(req,res,next){
        try{
            const deal=await DealService.updateDeal(req.params.id,req.body);
            res.status(200).json({success:true, data:deal});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteDeal(req,res,next){
        try{
            await DealService.deleteDeal(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=DealController;