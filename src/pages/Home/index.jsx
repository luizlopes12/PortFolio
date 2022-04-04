import React from 'react'
import Header from '../../components/Header'
import HomeBanner from '../../components/HomeBanner'
import { HomeStyle } from  './styled'
const Home = () => {
  return (
      <HomeStyle>
      <Header/>
      <HomeBanner/>
      </HomeStyle>
  )
}

export default Home