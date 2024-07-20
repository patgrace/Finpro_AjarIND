import React from 'react'
import Header from '../app/components/Header/Header'
import Hero from '../app/components/Hero/Hero'
import { CourseListContainer } from '../app/components/Course/CourseList'

export default function Page() {
  return (
    <>
    <Header />
    <Hero/>
    <CourseListContainer/>
    </>
  )
}
