const{OfferService}=require("../services");

class OfferController{
    static async createOffer(req,res,next){
        try{
            const offer=await OfferService.createOffer(req.body);
            res.status(201).json({success:true, data:offer});
        }
        catch(error){
            next(error);
        }
    }
    static async getOffers(req,res,next){
        try{
            const offers=await OfferService.getOffers();
            res.status(200).json({success:true, data:offers});
        }
        catch(error){
            next(error);
        }
    }
    static async getOfferById(req,res,next){
        try{
            const offer=await OfferService.getOfferById(req.params.id);
            res.status(200).json({success:true, data:offer});
        }
        catch(error){
            next(error);
        }
    }
    static async updateOffer(req,res,next){
        try{
            const offer=await OfferService.updateOffer(req.params.id, req.body);
            res.status(200).json({success:true, data:offer});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteOffer(req,res,next){
        try{
            await OfferService.deleteOffer(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=OfferController;