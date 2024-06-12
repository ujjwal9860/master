import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[500px] h-52 bg-slate-600 flex justify-center items-center flex-wrap'>

      <div className="bx h-10 w-80 bg-slate-700">
        <h1>box1</h1>
      </div>
      <div className="bx2 h-10 w-60 bg-pink-950 text-white">
        <h1>box2</h1>
      </div>
      <div className="bx3 h-10 w-52 bg bg-red-400">
        <h1>box3</h1>
      </div>
      <div className="bx4 h-10 w-52 bg bg-purple-400
      ">
        <h1>box4</h1>
      </div>


    </div>
  )
}

export default Home
