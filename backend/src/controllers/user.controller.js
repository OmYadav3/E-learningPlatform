import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
   try {
      const { fullname, email, password } = req.body;
      console.log("req.body: ", req.body);

      if (!fullname) {
         return res.status(400).json({
            message: `fullname is missing in the required field `,
            success: false,
         });
      }
      if (!email) {
         return res.status(400).json({
            message: `email is missing in the required field`,
            success: false,
         });
      }
      if (!password) {
         return res.status(400).json({
            message: `password is missing in the required field`,
            success: false,
         });
      }

      const user = await User.findOne({ email });
      if (user) {
         return res.status(400).json({
            message: "user already exist with this email",
            success: false,
         });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({
         fullname,
         email,
         password: hashedPassword,
      });

      // console.log(message, ":>> Account created sucessfully")

      return res.status(201).json({
         message: "Account created sucessfully",
         success: true,
      });
   } catch (error) {
      console.log(error, "Something error in register the user ");
      return res.status(500).json({
         message: "Internal Server Error",
         success: false,
         error: error.message,
      });
   }
};
