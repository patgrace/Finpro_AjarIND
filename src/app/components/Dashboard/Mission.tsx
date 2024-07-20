import React from 'react';
import MissionItem from '../Dashboard/MissionItem'

const missions = [
  { title: 'Design s', date: 'Fri, Jul 19', completed: false },
  { title: 'Sketsa Ilustrasi', date: 'Sat, Jul 20', completed: true },
  { title: 'Onboarding Design', date: 'Sun, Jul 21', completed: false },
];

const Mission = () => {
    return (
      <div className="bg-white p-6 rounded-md shadow-md mt-5 ml-4">
        <h2 className="text-lg font-bold mb-3">Mission</h2>
        {missions.map((mission, index) => (
          <MissionItem
            key={index}
            title={mission.title}
            date={mission.date}
            completed={mission.completed}
          />
        ))}
      </div>
    );
  };
  

export default Mission;