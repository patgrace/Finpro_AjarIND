import React from 'react';
import ContinueWatchingCard from '../Dashboard/ProgressCard';

const videos = [
  { image: '/images/continu1.png', title: 'Integration & Antiderivatives', category: 'Integral', progress: 50 },
  { image: '/images/continu2.png', title: 'Random Sampling', category: 'Statistics', progress: 75 },
  { image: '/images/continu3.png', title: 'Atom & Components', category: 'Atomics', progress: 30 },
];

const Progress = () => {
  return (
    <div className="mb-5 mx-4">
      <h2 className="text-lg font-bold mb-3">Continue Watching</h2>
      <div className="flex space-x-4">
        {videos.map((video, index) => (
          <ContinueWatchingCard
            key={index}
            image={video.image}
            title={video.title}
            category={video.category}
            progress={video.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Progress;