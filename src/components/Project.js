import React from 'react'

const data = {
  arr: [
    {
      heading: "Build a responsive calculator",
      techStack: "HTML CSS Java"
    },
    {
      heading: "Junoon : Arts & cultural club,MIT Muzaffarpur.",
      techStack: "JavaScript,React.js,Node.js,express.js,mongodb",
      description: " In this i created a website Which had many features like - registration , event registration , payment  etc Children could participate in all the events that were going to be held in the college through this application."

    },
    {
      heading: "Build a responsive portfolio.",
      techStack: "HTML,CSS,Bootstrap,React.js."
    }
  ]
}

const Project = () => {
  return (
    <div>
      <div className=' text-2xl font-bold flex items-start '>
        PROJECTS
      </div>
      <div class="border-b border-gray-500 my-1"></div>
      {data.arr.map((data, index) =>
        <div className=' pb-5'>
          <div className=' flex text-justify pl-2 font-bold'>{data.heading}</div>
          <div className=' flex text-justify pl-2'><div className=' font-bold mr-2'>TechStack : </div> {data.techStack}</div>
          <div className=' flex text-justify pl-2'>{data.description}</div>
        </div>
      )}
    </div>
  )
}

export default Project
