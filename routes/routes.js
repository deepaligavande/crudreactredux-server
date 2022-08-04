import express, { Router } from 'express'
import User from '../schema/userschema.js';

const router=express.Router();

router.post('/add',async(request,response)=>{
    const user=request.body;
    // console.log(user);
    const newUser=new User(user);
    try{
       await newUser.save();
       response.status(201).json(newUser);
    }catch(error){
        response.status(400).json({message:error.message});
    }
    
})

router.get('/all',async(request,response)=>{
    try{
        const users=await User.find({});
         response.status(200).json(users);
    }catch(error){
        response.status(404).json({message:error.message});
    }
})

router.get('/:id',async(request,response)=>{
    console.log(request.params.id)
    try{
        const user=await User.findById(request.params.id);
        response.status(200).json(user);
    }catch(error){
        response.status(404).json({message:error.message});  
    }
})

router.post('/:id',async(request,response)=>{
    User.findByIdAndUpdate(
        request.params.id,{
            $set:request.body
        },(error,data)=>{
            if(error){
                return next (error);
            }
            else{
                response.json(data);
                console.log('updated sucess');

            }
        }
        )

    // let User=request.body;
    // // console.log(user);
    // const editUser=new User(User);
    // try{
    //    await User.findByIdAndUpdate({_id:request.params.id},editUser);
    //    response.status(201).json(editUser);
    // }catch(error){
    //     response.status(409).json({message:error.message});  
    // }
})

router.delete('/:id',async(request,response)=>{
    try{
        await User.deleteOne({_id:request.params.id});
        response.status(200).json({message:"user deleted sucessfully"});
    }catch(error){
        response.status(409).json({message:error.message});
    }
})
export default router;