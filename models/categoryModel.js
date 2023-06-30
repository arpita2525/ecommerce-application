import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true,
        // unique:true,
    },
    slug:{
        type:String,
        lowercase:true,
    },
});
    export default mongoose.model("Category",categorySchema);
    //Category this Category is same as in product model js 
// slugify --nomjs library