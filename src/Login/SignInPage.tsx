import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpPage from './SignUpPage'; // Adjust the import based on your file structure

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
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

        <button type="submit">Sign In</button>
      </form>

      {/* Add a link to the SignUpPage */}
      <p>
        Don't have an account?{' '}
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
