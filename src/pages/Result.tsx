import React from "react";
import { Link } from 'react-router-dom';

interface ResultProps {
  result?: number;
}

const Result: React.FC<ResultProps> = ({ result = 0 }) => {
  let message: string;

  if (result === 0) {
    message = "Negative: The patient is Healthy";
  } else  {
    message = "Positive: The patient might have the disease";
  } 

  return (
    <div className="cardview">
      <h1>Result</h1>
      <p>{message}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Result;
