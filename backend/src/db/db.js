import mongoose from 'mongoose'

const connectionDb = async () => {

    try {
        
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected successfully")

    } catch (error) {
        console.log(error)
    }
}

export default connectionDb;