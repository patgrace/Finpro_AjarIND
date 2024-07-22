import React from 'react'
import Sidebar from '../app/components/Dashboard/Sidebar';
import Setting from '@/app/components/Dashboard/Setting';


export default function learningcenter() {
    return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-2">
        <Setting/>
        </main>
      </div>
    )
  }