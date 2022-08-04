import mongoose from 'mongoose'

const connection = ()=>{
    const URL=`mongodb://localhost:27017`;
    try{
        mongoose.connect("mongodb+srv://deepali:deep2010@crud-app.n41onzz.mongodb.net/?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("database connected sucessfully")
    }catch(error){
        console.log('Error while connecting database',error);
    }
}
export default connection

//mongodb://deepali:deep2010@ac-0evhgvd-shard-00-00.n41onzz.mongodb.net:27017,ac-0evhgvd-shard-00-01.n41onzz.mongodb.net:27017,ac-0evhgvd-shard-00-02.n41onzz.mongodb.net:27017/CRUD APP?ssl=true&replicaSet=atlas-d9nqqz-shard-0&authSource=admin&retryWrites=true&w=majority