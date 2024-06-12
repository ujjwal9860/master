import React from 'react'
import Home from './ui/home/Home'

const App = () => {
  return (
    <div className='p-5 space-y-1 '>
      <Home color='red' data='submit' />
      <Home color='blue' data='click' />
      <Home color='green' data='start' />
    </div>
  )
}

export default App
