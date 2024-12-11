import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: (value: string) => {
        // Email regex validation
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: 'Please enter a valid email address',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
});

// Pre-save hook to hash the password before saving to the database
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // Hash the password using bcrypt with a salt factor of 12
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword; // Save the hashed password
    next(); // Continue with the save operation
  } catch (error) {
    next(); // Pass any errors to the next middleware or error handler
  }
});

// Method to compare hashed password with input password
UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create the User model
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
