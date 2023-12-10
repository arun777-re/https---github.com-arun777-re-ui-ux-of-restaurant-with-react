import React from 'react'
import './About.css';
import images from '../../constants/images'
const About = () => {
  return (
    <div className='app__aboutus app__bg flex__center'>
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
    </div>
        
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="header__h1">
            About Us
          </h1>
          <img src={images.spoon} alt="knife" className='spoon__img'/>
          <p className='p__opensans'>We are the best one restaurant among india who are serving the food with quality and freshness</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="header__h1">
            Our History
          </h1>
          <img src={images.spoon} alt="knife" className='spoon__img'/>
          <p className='p__opensans'>We are the best one restaurant among india who are serving the food with quality and freshness</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>

  )
}

export default About