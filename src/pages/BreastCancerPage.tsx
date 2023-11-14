import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./BreastCancerPage.css"; // Import a CSS file for styling

const BreastCancerPage: React.FC = () => {
  const [inputValues, setInputValues] = useState<string[]>(Array(18).fill(''));
  const navigate = useNavigate(); // Add this line

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted values:", inputValues);
    // You can add logic here to handle the form submission, e.g., sending data to a server

    // Navigate to the Result page
    navigate('/Result');
  };

  const capitalizeEachWord = (str: string) => {
    return str
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const features = [
  'Area mean',
  'Area se',
  'Area worst',
  'Compactness worst',
  'Concave points mean',
  'Concave points se',
  'Concave points worst',
  'Concavity mean',
  'Concavity se',
  'Concavity worst',
  'Fractal dimension se',
  'Fractal dimension worst',
  'Perimeter mean',
  'Perimeter se',
  'Perimeter worst',
 'Radius worst',
  'Smoothness worst',
  'Texture worst'
  ];

  return (
    <div className="cardview">
      <h1>Breast Cancer Predictor</h1>
      <form onSubmit={handleSubmit} className="form-container">
        {features.map((feature, index) => (
          <div key={index}>
            <label htmlFor={feature}>{capitalizeEachWord(feature.replace('_', ' '))}:</label>
            <input
              type="text"
              id={feature}
              value={inputValues[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Enter`} // Add placeholder text
              required
            />
          </div>
        ))}
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
};


export default BreastCancerPage;
