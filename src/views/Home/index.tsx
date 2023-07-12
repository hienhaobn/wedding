import React from 'react'
import Sidebar from './components/Sidebar'
import {
  Countdown,
  Footer,
  Gallery,
  Information,
  LookingForwards,
  Messages,
  OrGeneration,
  OurLove,
  People,
  Questions,
} from './components'
import styled from 'styled-components'

const HomeStyled = styled.div`
  width: '100%';
  overflow: 'hidden';
  position: 'relative';
`

const AsideContainer = styled.aside`
  padding: 60px 30px;
  width: 22%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: scroll;
  z-index: 1001;
  background: #f6f1f0;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  scrollbar-width: none;
`

const Content = styled.div`
  width: 78%;
  float: right;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
`

function Home() {
  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      {/* sidebar section */}
      <AsideContainer>
        <Sidebar />
      </AsideContainer>
      {/* Content section */}
      <Content>
        {/* information */}
        <Information />
        {/* countdown */}
        <Countdown />
        {/* our love */}
        <OurLove />
        {/* people */}
        <People />
        {/* looking forwards */}
        <LookingForwards />
        {/* or generation */}
        <OrGeneration />
        {/* gallery */}
        <Gallery />
        {/* questions */}
        <Questions />
        {/* messages */}
        <Messages />
        {/* footer */}
        <Footer />
      </Content>
    </div>
  )
}

export default Home
