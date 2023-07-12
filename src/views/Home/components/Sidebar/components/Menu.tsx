import React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.a`
  color: #000;
  text-decoration: none;
  position: relative;
  padding: 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.5em;
  letter-spacing: 0.5px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-bottom: 1px solid transparent;
`

const LiStyled = styled.li`
  margin: 3px 0 3px 0;
  padding: 0 0 3px 0;
  list-style: none;
`
function Menu() {
  return (
    <nav>
      <ul>
        <LiStyled>
          <TitleStyled title="Home" href="#home">
            Home
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="Couple" href="#couple">
            Couple
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="Our Story" href="#story">
            Our Story
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="Friends" href="#friends">
            Friends
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="Organization" href="#organization">
            Organization
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="Gallery" href="#gallery">
            Gallery
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="When & Where" href="#whenwhere">
            When & Where
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="R.S.V.P" href="#rsvp">
            R.S.V.P
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="Gift Registry" href="#gift">
            Gift Registry
          </TitleStyled>
        </LiStyled>
        <LiStyled>
          <TitleStyled title="Blog" href="/blog">
            Blog
          </TitleStyled>
        </LiStyled>
      </ul>
    </nav>
  )
}

export default Menu
