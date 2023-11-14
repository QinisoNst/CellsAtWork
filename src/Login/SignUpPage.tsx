// Import React and useState from React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define the types for the component props
interface SignUpPageProps {}

// Create a functional component for the sign-up page
const SignUpPage: React.FC<SignUpPageProps> = () => {
  // State to hold user input (username, email, and password)
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Function to handle form submission
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would perform user registration here
    // For simplicity, let's just log the registration details for now
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Form for user input */}
      <form onSubmit={handleSignUp}>
        {/* Username input */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

// Export the component for use in other parts of the application
export default SignUpPage;
