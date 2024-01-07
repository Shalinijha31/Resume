import React from 'react'

const Heading = () => {
    return (
        <div className='flex flex-col gap-1 mt-4'>
            <div className=' font-bold text-3xl'>
                Shalini Kumari
            </div>
            <div className=' flex text-center justify-center gap-4'>
                <div>Shalinikumari2k2@gmail.com</div>
                <div class="border-l h-4 border-gray-500 mt-1"></div>
                <div>91+ 9572281924</div>
            </div>

            <div className='flex flex-row items-center justify-center underline gap-3'>
                <a href="https://github.com/shalinijha31" className="link" target="_blank">Github</a>
                <div className="border-l h-4 border-gray-500 mt-1"></div>
                <a href="https://www.linkedin.com/in/shalinijha31/" className="link" target="_blank">Linkedin</a>
                <div className="border-l h-4 border-gray-500 mt-1"></div>
                <a href="https://leetcode.com/shalinijha31/" className="link" target="_blank">LeetCode</a>
                <div className="border-l h-4 border-gray-500 mt-1"></div>
                <a href="https://auth.geeksforgeeks.org/user/shalinijha31" className="link" target="_blank">GFG</a>
            </div>

        </div>
    )
}

export default Heading
