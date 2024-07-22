import React from 'react';
import Participants from '@/app/components/StudyGroups/Participants';
import Chat from '@/app/components/StudyGroups/Chat';
import Sidebar from '../app/components/Dashboard/Sidebar';


export default function StudyGroups() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-5">
        <h1 className="text-2xl font-bold mb-12 flex justify-center">Study Groups</h1>
        <div className="flex">
          <div className="flex-1">
            <Participants />
          </div>
          <div className="flex-none w-1/4 ml-4">
            <Chat />
          </div>
        </div>
      </main>
    </div>
  );
}