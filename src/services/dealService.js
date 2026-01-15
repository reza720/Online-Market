const {Deal}=require("../models");

class DealService{
    async createDeal(data){
        return Deal.create(data);
    }
    async getDeals(){
        return Deal.findAll();
    }
    async getDealById(id){
        const deal=await Deal.findByPk(id);
        if(!deal){
            const err=new Error("Deal not found");
            err.statusCode=404;
            throw err;
        }
        return deal;
    }
    async updateDeal(id,data){
        const deal=await this.getDealById(id);
        await deal.update(data);
        return deal;
    }
    async deleteDeal(id){
        const deal=await this.getDealById(id);
        await deal.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new DealService();