import React from "react";
import styled from "styled-components";


import img4 from '../assets/Images/imgx.jpg';
import smallimg02 from "../assets/Images/wallet.png"
import smallimg01 from "../assets/Images/imgx1.png"

const Section = styled.section`
height: 130vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll 
    data-scroll-sticky  data-scroll-target ="#fixed-target">
      <p data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">We&apos;re Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam fugiat temporibus facilis illo quam laborum ab atque ipsum rem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, eius?
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quaerat velit error odit unde fugit amet, eveniet ad atque iusto? 
        <br />
        <br />
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio quam et, ad cum neque? Aperiam quod illo officia, incidunt asperiores animi aliquid suscipit adipisci dicta similique in veritatis hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, blanditiis!.</p>
        
      </Left>

      <Right>
        <img width="400" height="600" src={img4} alt="About Us" />
      
        <img
          width="400"
          height="600"
          className="small-img-2"
          src={smallimg02}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default About;
