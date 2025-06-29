import React from 'react'
import './About.css'
import group_photo from '../../assets/group-photo.jpg'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={group_photo} alt="" className='group-photo' />
             
        </div>
        <div className="about-right">
            <h3>ABOUT  UPGRADE  TUITION</h3>
            <h2>Because Strong Foundations Build Limitless Futures</h2>
            <p>At UpGrade Tuition, we believe that with the right environment, support, and mentorship, every student can unlock their full academic potential. Our programs are thoughtfully designed for students of Class 5 to 12, helping them build strong subject foundations, develop confidence, and achieve consistent academic excellence.

With a team of passionate educators, structured lesson plans, and regular performance tracking, we don’t just teach — we empower students to understand, apply, and succeed. Our classrooms are spaces of curiosity, clarity, and growth — where students feel heard, challenged, and supported.

Whether your child is aiming for better grades, preparing for board exams, or simply needs personalized attention, UpGrade Tuition is the trusted partner in their learning journey — turning struggles into strengths and effort into achievement.</p>
        </div>
      
    </div>
  )
}

export default About
