import React from 'react';
import SubjectCard from '../Dashboard/SubjectCard';

const subjects = [
  { image: '/images/math.png', title: 'Mathematics' },
  { image: '/images/bio.png', title: 'Biology' },
  { image: '/images/physics.png', title: 'Physics' },
  { image: '/images/eng.png', title: 'English' },
  { image: '/images/others.png', title: 'Others' },
];

const SubjectList = () => {
  return (
    <div className="flex justify-around items-center mb-5 mx-2">
      {subjects.map((subject, index) => (
        <SubjectCard key={index} image={subject.image} title={subject.title} />
      ))}
    </div>
  );
};

export default SubjectList;