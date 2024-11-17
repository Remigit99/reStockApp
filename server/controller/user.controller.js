import userModel from "../model/user.model"

// Create User Controller


const createUserController = async (req, res) =>{

    try {
        const createUser = await userModel.create(req.body)

        const result = await createUser.save()
res.status(201).json({})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Error creating user"})
    }
} 