import React from 'react'
import './Campus.css'
import pic_1 from '../../assets/pic 1.jpg'
import pic_2 from '../../assets/pic-2.jpg'
import pic_3 from '../../assets/pic-3.jpg'
import pic_4 from '../../assets/pic-4.jpg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={pic_1}alt="" />
            <img src={pic_2}alt="" />
            <img src={pic_3}alt="" /> 
            <img src={pic_4}alt="" />


        </div>      
    </div>
  )
}

export default Campus
