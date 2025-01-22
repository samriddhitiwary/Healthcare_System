import User from "../models/ProfileModel.js";

export const create = async(req, res)=>{
    try {

        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "User data not found"});
        }

        await userData.save();
        res.status(200).json({msg: "User created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getOne = async(req, res) =>{
    // console.log('SAMRIDDHI SAMRIDDHI ', req)
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User not found"});
        }
        res.status(200).json(userExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}  

export const getUserByEmailId = async(req, res)=>{
    const email = req.query.email;
    try{
        const user = await User.findOne({email : email})
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(200).json({});
        }
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User not found"});
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "User updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deleteUser = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User not exist"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "User deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}