const bcrypt = require('bcryptjs');

// Controller for handling user login
module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });

      // Check if user exists
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);

      // Check if password is valid
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Return success response
      res.json({ message: 'Login successful' });
    } catch (error) {
      // Server error
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Controller for handling user signup
  signup: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check for missing fields
      if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = await User.create({ email, password: hashedPassword }).fetch();

      // Return the created user
      res.json({ user });
    } catch (error) {
      // Server error or user already registered
      res.status(500).json({ error: 'User already registered! Do the right thing' });
    }
  }
};
