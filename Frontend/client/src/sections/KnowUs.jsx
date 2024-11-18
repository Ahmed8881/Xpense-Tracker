import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import styled from "styled-components";

import img3 from "../assets/Images/money.png";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: relative;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 60%;
    position: fixed;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;
  text-align: center; /* Center inline or inline-block level elements */

  @media (max-width: 48em) {
    visibility: hidden;

    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    mix-blend-mode: multiply;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = () => {
  return (
    // x: 100, y: -100
    <div class="relative duration-500  hover:-rotate-0   group [transform:rotate3d(1_,-1,_1,_60deg)] border border-green-900 border-4  overflow-hidden rounded-2xl relative h-96 w-64 bg-green-800 p-5 flex flex-col items-start gap-4">
      <div class="text-gray-50">
        <span class="font-bold text-5xl">Xpense</span>
        <p class="text-xs">What is Really Xpense Checkout</p>
      </div>
      <button class="duration-300 hover:bg-green-900 border hover:text-gray-50 bg-gray-50 font-semibold text-green-800 px-3 py-2 flex flex-row items-center gap-3">Start Saving Money</button>

      <svg
        class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-green-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <path
          data-name="layer1"
          d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
          stroke-miterlimit="10"
          stroke-width="5"
        ></path>
      </svg>

      <svg
        class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-green-700"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <path
          data-name="layer1"
          d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
          stroke-miterlimit="10"
          stroke-width="2"
        ></path>
      </svg>
    </div>
  );
};

const KnowUs = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <Section id="KnowUs">
      <Title data-scroll data-scroll-speed="-1">
        Xpense Tracker
      </Title>
      <Left>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, hic
          omnis doloremque nam quaerat eveniet animi vitae placeat ut qui
          deleniti rerum sunt excepturi consequuntur.
          <br /> <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iste
          incidunt tempora doloremque rem fuga dolorem eligendi repudiandae
          delectus asperiores a doloribus numquam placeat, praesentium inventore
          modi unde officia architecto magni itaque
        </p>
      </Left>
      <Right data-scroll>
        <Product />
      </Right>
    </Section>
  );
};

export default KnowUs;
