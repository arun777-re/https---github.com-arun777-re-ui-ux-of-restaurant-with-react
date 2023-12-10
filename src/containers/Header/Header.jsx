import React from 'react'
import './Header.css';
// import {images} from '../../constants/images';
import { Subheading } from '../../components';
import images from '../../constants/images';


const Header = () => {
  return (
    <div className="app__header1 app__wrapper">

    <div className="app__header app__wrapper  section__padding">
      <div className="app__wrapper_info ">
      <Subheading title={"Chase the new flavour"}/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Sit tell us labortis sed and hello how are you 
      what are you doing now i am fine what are you doing now</p>
      <button type="button" className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
      <img src={images.welcome} alt='header img'/>
      </div>
      </div>
    </div>


  )
}

export default Header