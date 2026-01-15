const{Offer}=require("../models");

class OfferService{
    async createOffer(data){
        return Offer.create(data);
    }
    async getOffers(){
        return Offer.findAll();
    }
    async getOfferById(id){
        const offer=await Offer.findByPk(id);
        if(!offer){
            const err= new Error("Offer not found");
            err.statusCode=404;
            throw err;
        }
        return offer;
    }
    async updateOffer(id,data){
        const offer=await this.getOfferById(id);
        await offer.update(data);
        return offer;
    }
    async deleteOffer(id){
        const offer=await this.getOfferById(id);
        await offer.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new OfferService();