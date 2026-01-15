const {User}=require("../models");

class UserService{
    async create(data){
        return User.create(data);
    }
    async getUsers(){
        return User.findAll();
    }
    async getUserById(id){
        const user=await User.findByPk(id);
        if(!user){
            const err=new Error("User not found");
            err.statusCode=404;
            throw err;
        }
        return user;
    }
    async updateUser(id,data){
        const user=await this.getUserById(id);
        await user.update(data);
        return user;
    }
    async deleteUser(id){
        const user=await this.getUserById(id);
        await user.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new UserService();
