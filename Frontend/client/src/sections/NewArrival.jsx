import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  height: 60vh;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    top: 4rem;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ img, name }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const NewArrival = () => {
  return (
    <Section className="new-arrival">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Team
      </Title>

      <div className="flex  relative space-x-4 justify-center items-center w-full">
        <div class="group">
          <button>
            <svg
              class="w-32 aspect-square rounded-full hover:scale-125 duration-200 hover:stroke-blue-500"
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
          </button>
          <span
            class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
          >
            1. Sher Muhammad<span></span>
          </span>
        </div>
        <div class="group">
          <button>
            <svg
              class="w-32 aspect-square rounded-full hover:scale-125 duration-200 hover:stroke-blue-500"
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
          </button>
          <span
            class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
          >
            2. Hamid Khan<span></span>
          </span>
        </div>
        <div class="group">
          <button>
            <svg
              class="w-32 aspect-square rounded-full hover:scale-125 duration-200 hover:stroke-blue-500"
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
          </button>
          <span
            class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
          >
            3. Ahmed Khan<span></span>
          </span>
        </div>
        <div class="group">
          <button>
            <svg
              class="w-32 aspect-square rounded-full hover:scale-125 duration-200 hover:stroke-blue-500"
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
          </button>
          <span
            class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
          >
            4. Sumaira<span></span>
          </span>
        </div>
        <div class="group">
          <button>
            <svg
              class="w-32 aspect-square rounded-full hover:scale-125 duration-200 hover:stroke-blue-500"
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
          </button>
          <span
            class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
          >
            5. Arwa<span></span>
          </span>
        </div>
        <div class="group">
          <button>
            <svg
              class="w-32 aspect-square rounded-full hover:scale-125 duration-200 hover:stroke-blue-500"
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
          </button>
          <span
            class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
          >
            6. Uzair Khan <span></span>
          </span>
        </div>
      </div>
    </Section>
  );
};

export default NewArrival;
