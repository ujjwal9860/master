import React from 'react'

const Home = ({ color, data }) => {
  console.log(color, data)
  return (
    <div>
      <button className={`${data} text-white px-4 py-2 rounded-sm`}>{data}</button>
    </div>
  )
}

export default Home
