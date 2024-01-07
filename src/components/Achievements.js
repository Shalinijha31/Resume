import React from 'react'

const data = [
    "Google girl's hackthon 2023 Round 1 cleared.",
    "Techgig code Gladiators 2023 Semi-Finale Round cleared.",
    "Received LOR letter from CodeClause and LOM from CCNA Module 1",
    "Received NPTEL Excellence Award by “MITMAAI”."
];
const Achievements = () => {
    return (
        <div>
            <div className=' text-2xl font-bold flex items-start '>
                ACHIEVEMENTS
            </div>
            <div class="border-b border-gray-500 my-1"></div>

            {data.map((element, index) =>
                <ul className=' list-disc flex text-justify pl-6'>
                    <li >{element}</li>
                </ul>

            )}

        </div>
    )
}

export default Achievements
