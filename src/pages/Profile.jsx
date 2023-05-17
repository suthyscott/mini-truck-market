import React from 'react'
import AddTruck from '../elements/AddTruck'
import MyTrucks from '../elements/MyTrucks'
import '../css/Profile.css'

const Profile = () => {
  return (
    <div id='profile-container'>
      <MyTrucks/>
      <AddTruck/>
    </div>
  )
}

export default Profile