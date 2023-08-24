import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile_type: {
    type: Boolean, //do we really ant boolean ? Yes-no
    required: true,
  },
});

//Middleware to hash password for sign ups
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next( )
});

const User = mongoose.model("User", userSchema);

export { User, userSchema };
