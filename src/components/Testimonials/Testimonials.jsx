import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0);

  const slideForword = () => {
    if (tx.current > -75) { // assuming 4 slides, each taking 25%
      tx.current -= 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const slideBackword = () => {
    if (tx.current < 0) {
      tx.current += 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForword} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackword} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Priya Mehra</h3>
                  <span>Gorakhpur</span>
                </div>
              </div>
              <p>
                “Before joining UpGrade Tuition, my son was struggling with basic concepts. Within just a few months, not only did his confidence grow, but his marks improved drastically. The teachers here don’t just teach — they genuinely care. I couldn’t have asked for a better support system for his academic journey.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Rohan Sinha</h3>
                  <span>Lucknow</span>
                </div>
              </div>
              <p>
                “Every student learns differently, and UpGrade understands that. The personalized attention and structured approach helped me finally understand math — something I always feared. Now I actually enjoy studying, and I owe it to the amazing mentors here!”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Simran Batra</h3>
                  <span>Bengaluru</span>
                </div>
              </div>
              <p>
                “What impressed me the most is how UpGrade focuses not just on exams, but on building a deep understanding. The regular feedback and progress tracking made us feel involved as parents. It’s not just a tuition — it’s a transformation hub.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Manoj Khanna</h3>
                  <span>Jaipur</span>
                </div>
              </div>
              <p>
                “I joined UpGrade Tuition with average grades, but now I consistently rank among the top in my class. The environment is so encouraging, and the teachers are extremely approachable. It’s more than just tuition – it’s where you find your potential.”
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

