import React from 'react'
import './Programs.css'
import program_1 from '../../assets/programs-1.jpg'
import program_2 from '../../assets/programs-2.jpg'
import program_3 from '../../assets/programs-3.jpg'
import program_icon_1 from '../../assets/program-icon-1.jpg'
import program_icon_2 from '../../assets/program-icon-2.jpg'
import program_icon_3 from '../../assets/program-icon-3.jpg'



const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt='' />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Foundational Learning  
                Strong basics for future success.</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt='' />
             <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Focused guidance to excel in Class 9 & 10 exams.</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt='' />
             <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Expert-led classes for competitive and board success.</p>
            </div>
        </div>
        </div>
  )
}

export default Programs
