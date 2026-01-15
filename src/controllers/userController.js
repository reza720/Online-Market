const {UserService}=require("../services");

class UserController{
    static async createUser(req,res,next){
        try{
            const user=await UserService.createUser(req.body);
            res.status(201).json({success:true, data:user});
        }
        catch(error){
            next(error);   
        }
    }
    static async getUsers(req,res,next){
        try{
            const users=await UserService.getUsers();
            res.status(200).json({success:true, data:users});
        }
        catch(error){
            next(error);
        }
    }
    static async getUserById(req,res,next){
        try{
            const user=await UserService.getUserById(req.params.id);
            res.status(200).json({success:true, data:user});
        }
        catch(error){
            next(error);
        }
    }
    static async updateUser(req,res,next){
        try{
            const user=await UserService.updateUser(req.params.id,req.body);
            res.status(200).json({success:true, data:user});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteUser(req,res,next){
        try{
            await UserService.deleteUser(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=UserController;