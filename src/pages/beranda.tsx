import React from 'react'
import Sidebar from '../app/components/Dashboard/Sidebar';
import SearchBar from '@/app/components/Dashboard/SearchBar';
import Banner from '@/app/components/Dashboard/Banner';

import StudyFeature from '@/app/components/Dashboard/StudyFeature';
import LevelandFeature from '@/app/components/Dashboard/LevelandFeature';
import SubjectList from '@/app/components/Dashboard/SubjectList';
import WeeklyProgress from '@/app/components/Dashboard/WeeklyProgress';
import ContinueWatching from '@/app/components/Dashboard/Progress';
import Mission from '@/app/components/Dashboard/Mission';

export default function learningcenter() {
    return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-5">
          <SearchBar />
          <div className="flex justify-between">
            <div className="flex-1 w-full">
              <Banner />
            </div>
            <div className="flex flex-col w-1/4">
              <WeeklyProgress />
            </div>
          </div>
          <div className='flex justify-between mt-5'>
            <div className="flex-1">
              <ContinueWatching />
            </div>
            <div className="w-1/4">
              <Mission />
            </div>
          </div>
          
          {/* Komponen lain di sini */}
        </main>
      </div>
    )
  }