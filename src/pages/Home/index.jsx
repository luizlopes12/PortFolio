import React from 'react'
import HomeBanner from '../../components/HomeBanner'
import TechBanner from '../../components/TechBanner'
import { HomeStyle } from  './styled'

const Home = () => {
  return (
      <HomeStyle>
      <HomeBanner/>
      <TechBanner/>
      </HomeStyle>
  )
}

export default Home