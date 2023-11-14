import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="cardview">
      <h1>Understanding the Dangers of Cancer</h1>
      <p>
        Cancer is a complex group of diseases characterized by the uncontrolled growth and spread of abnormal cells. It can occur in any part of the body and may form a lump or mass called a tumor.
      </p>
      <p>
        Early detection and awareness are crucial in the fight against cancer. Learn more about the risk factors, symptoms, and preventive measures to protect your health.
      </p>
      {/* Add more information or components as needed */}
      
      {/* Start button linking to the BreastCancerPage */}
      <Link to="/breast-cancer">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default Home;