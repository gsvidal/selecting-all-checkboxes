import * as React from 'react';
import Checkbox from './Components/Checkbox';
import './style.css';
Gonza;
export default function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-purple-700 to-blue-700 items-center justify-center flex flex-col">
      <h1 className="font-medium text-white text-base">Algochurn</h1>
      <h2 className="font-bold text-white text-xl mb-4">
        Select All Implementation
      </h2>
      <p className="text-white text-sm text-center">
        Read the description to start solving the problem.
      </p>
      <Checkbox />
    </div>
  );
}
