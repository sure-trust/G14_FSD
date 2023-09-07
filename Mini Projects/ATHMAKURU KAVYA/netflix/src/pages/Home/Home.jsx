import React from 'react'
import Navbar  from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List  from '../../components/list/List'
import "./home.scss"
import Register from '../register/register'
import Login from '../login/login'
import Watch from '../watch/watch'
export const Home = () => {
  return (
    <>
      <div className="home">
    <Navbar/>
    <Featured type="movie"  />
    <List/>
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <Watch/> */}
    </div>

    </>
  )
}
