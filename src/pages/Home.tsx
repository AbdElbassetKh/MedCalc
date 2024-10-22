import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to MedCalc</h1>
      <p className="text-xl mb-8">
        Improve patient care with accurate medication dosage calculations
      </p>
      <Link
        to="/calculator"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
      >
        Start Calculating <ArrowRight size={20} className="ml-2" />
      </Link>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Accurate Dosages"
          description="Calculate precise medication dosages based on patient data"
        />
        <FeatureCard
          title="Offline Access"
          description="Use the app even without an internet connection"
        />
        <FeatureCard
          title="Data Privacy"
          description="Secure storage of patient information adhering to healthcare regulations"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;