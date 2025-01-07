// import { model, Schema } from 'mongoose';
// import { TUser, UserModel } from './user.interface';
// import bcrypt from 'bcrypt'
// import config from '../../config';

// const userSchema = new Schema<TUser,UserModel>({
//   name: {
//     type: String,
//     required:true,
//   },
//   email:{
//     type:String,
//     required:true,
//     unique:true,
//   },
//   password:{
//     type:String,
//     required:true
//   },
//   role:{
//     type:String,
//     enum:['admin','user'],
//     default:'user'
//   },
//   isBlocked:{
//     type:Boolean,
//     default:false
//   }

// },{
//   timestamps:true
// });

// userSchema.pre('save',async function(next){
//   const user = this;
//   user.password= await bcrypt.hash(user.password,Number(config.salt_round));
//   next();
// })

// userSchema.post('save',function (doc,next){
//   doc.password = '';
//   next()
// })

// userSchema.statics.isPasswordMatched = async function (
//   plainTextPassword,
//   hashedPassword,
// ) {
//   return await bcrypt.compare(plainTextPassword, hashedPassword);
// };

// export const userModel = model<TUser,UserModel>('user',userSchema)
