import React from 'react'
import HomeCarousel from './Layouts/HomeCarousel'
import ListMovies from './Layouts//ListMovies'
import TimeTable from './Layouts//TimeTable'

export default function Home() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <HomeCarousel />
      <ListMovies />
      <TimeTable />
    </div>
  )
}
