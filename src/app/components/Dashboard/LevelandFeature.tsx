import React from 'react';
import LevelSelector from './LevelSelector';
import StudyFeature from './StudyFeature';




const LevelAndFeatureSelector = () => {
  return (
    <div className="flex m-6 items-center ">
      <div className="flex mx-6">
        <LevelSelector />
      </div>
      <div className="flex mx-6">
       
        <StudyFeature />
      </div>
    </div>
  );
};

export default LevelAndFeatureSelector;