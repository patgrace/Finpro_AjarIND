import React from 'react'
import Sidebar from '../app/components/Dashboard/Sidebar';
import SearchBar from '@/app/components/Dashboard/SearchBar';
import Tuti from '@/app/components/Tuti/Tuti';
import Discussion from '@/app/components/Tuti/Discussion';


export default function learningcenter() {
    return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-5">
          <SearchBar />
              <Tuti />
              <Discussion />
        </main>
      </div>
    )
  }