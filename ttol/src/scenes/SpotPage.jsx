import React from 'react'
import LieRectangel from '../components/LieRectangel'
import './SpotPage.css'
const SpotPage = () => {
  return (
    <div className='SpotPage'>
        <p className='spot_heading'>Can you spot the lie? 😜</p>
        <div className="LieRectangles">
        <LieRectangel text="I have a Black belt in Karate"/>
      <div className="LieRectangle2">
      <LieRectangel text='I have ghosted a celebrity in dms'/>
      <LieRectangel text='I have accidently texted a  meme to my boss'/>
      </div>
      </div>
      
    </div>
  )
}

export default SpotPage
