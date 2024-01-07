import React from 'react'


const data = {
    arr: [
        {
            name: "Programming Language ",
            value: "Java, Dsa",
        },
        {
            name: "Database ",
            value: " MySQL,MongoDB",
        },
        {
            name: "Operating System Worked on ",
            value: " Windows, Linux",
        },
        {
            name: "Web Technology",
            value: " : Reactjs, Nodejs, tailwind,Html,Css",
        },
        {
            name: "Tool",
            value: " Git,Canva",
        }
    ]

}
const Skills = () => {
    return (
        <div>
            <div className=' text-2xl font-bold flex items-start '>
                SKILLS
            </div>
            <div class="border-b border-gray-500 my-1"></div>
            {data.arr.map((data, index) =>
                <div className=' flex text-justify pl-2'>
                    <div className=' font-bold'>{data.name}:</div>
                    <div className=' pl-2'>{data.value}</div>
                </div>
            )}
        </div>
    )
}

export default Skills
