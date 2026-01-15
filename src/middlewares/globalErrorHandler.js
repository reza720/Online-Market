globalErrorHandler=(err,req,res,next)=>{
    console.error(err);

    const statusCode=err.statusCode || 500;
    const message= err.message || "Internal Server Error";
    
    return res.status(statusCode).json({ success: false, message, errors: err.errors || [] });
};

module.exports=globalErrorHandler;