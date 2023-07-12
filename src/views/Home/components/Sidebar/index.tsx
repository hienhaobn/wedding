import React from 'react'
import styled from 'styled-components'
import Menu from './components/Menu'

const NavContainer = styled.div`
  background-color: #92a8d1;
`

const OlivenLogoStyled = styled.div`
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 60px;
  display: block;
  width: 100%;
  position: relative;
  color: #000;
  line-height: 1.2em;
  letter-spacing: 0px;
`

const NameCoupleStyled = styled.span`
  font-size: 36px;
  color: #bd945a;
  font-family: 'Alex Brush', cursive;
  font-weight: 400;
  display: block;
  margin-top: 0px;
  text-align: center;
  line-height: 1.5em;
  text-transform: none;
  text-decoration: none;
`

const DateStyled = styled.h6`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  text-transform: none;
  text-align: center;
  font-size: 10px;
  letter-spacing: 5px;
  color: #000;
  margin-bottom: 5px;
  line-height: 1.25em;
`
function Sidebar() {
  return (
    <OlivenLogoStyled>
      <a href="/">
        <img
          src="https://shtheme.org/demosd/enrico/wp-content/uploads/2021/11/logo.png"
          alt=""
          style={{
            width: '90px',
            marginBottom: '0px',
            height: 'auto',
          }}
        />
        <NameCoupleStyled>
          Olivia
          <small
            style={{
              fontSize: '80%',
              fontFamily: 'Alex Brush cursive',
              fontWeight: 400,
            }}
          >
            &
          </small>
          Enrico
        </NameCoupleStyled>
        <DateStyled>15.11.2023</DateStyled>
      </a>
      <Menu />
    </OlivenLogoStyled>
  )
}

export default Sidebar
