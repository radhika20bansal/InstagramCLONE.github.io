// const mongoose=require('mongoose');
// const {ObjectId}=mongoose.Schema.Types;
// const userschema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type: String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     resetToken:String,
//     expireToken:Date,
//     pic:{
//      type:String,
//      default:"https://res.cloudinary.com/poojarathore/image/upload/v1592762051/NoImage_wxdacx.png"   
//     },
//     followers:[
//         {type:ObjectId,
//         ref:"users"
//     }],
//     following:[
//         {type:ObjectId,
//         ref:"users"
//     }]
// })
// mongoose.model("users",userschema);