import React from 'react'

const Education = () => {
    return (
        <div>
            <div className=' text-2xl font-bold flex items-start '>
                Education
            </div>
            <div class="border-b border-gray-500 my-1"></div>
            <div className=' pl-2'>
                <div>
                    <div className='flex justify-between font-bold'>
                        <div>Muzaffar Institute of Technology</div>
                        <div>Muzaffarpur,Bihar,India</div>
                    </div>
                    <div className='flex justify-between '>
                        <div>Information Technology , B.Tech</div>
                        <div>2021 - 2024</div>
                    </div>
                </div>
                <div className=' my-3'>
                    <div className='flex justify-between font-bold'>
                        <div>Government Women's Polytechnic,patna</div>
                        <div>Patna,Bihar,India</div>
                    </div>
                    <div className='flex justify-between '>
                        <div>Computer Science & Engg. , Diploma</div>
                        <div>2018 - 2021</div>
                    </div>
                    <ul className=' list-disc flex  pl-5 font-bold '><li>CGPA - 8.3</li></ul>
                </div>
                <div className=' my-3'>
                    <div className='flex justify-between font-bold '>
                        <div>+2LM High School Anandpur</div>
                        <div>Darbhanga,Bihar,India</div>
                    </div>
                    <div className='flex justify-between '>
                        <div>Matriculation</div>
                        <div>2018</div>
                    </div>
                    <ul className=' list-disc flex pl-5 font-bold '><li>Precentage - 64.6 %</li></ul>
                </div>
            </div>
        </div>
    )
}

export default Education
