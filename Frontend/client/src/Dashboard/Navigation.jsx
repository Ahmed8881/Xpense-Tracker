import styled from "styled-components";
import { menuItems } from "./GlobalData/menuItem";
import { settings } from "./GlobalData/Icons";
import { useGlobalContext } from "./GlobalData/globalContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { settings } from '../utills/Icons'

function Navigation({ active, setActive }) {
    const history =  useNavigate();
  const [click, setClick] = useState(true);
  const { user, signOut } = useGlobalContext();

  return (
    <>
      <div
        className={`absolute top-8 z-50 transition-all duration-500  ${
          click
            ? "bg-white text-green-400 left-48"
            : "bg-[#07271f] text-white left-4"
        } h-10 w-10 flex justify-center items-center rounded-full
            `}
      >
        <button
          onClick={() => {
            setClick(!click);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="3" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="absolute top-80 left-1 rotate-90 hidden md:block font-protest-riot">
        <h1
          className="font-extrabold text-7xl text-white "
          style={{ fontFamily: "Kaushan Script", letterSpacing: "4px" }}
        >
          Xpense
        </h1>
      </div>
      <NavStyled
        className={`bg-[#07271f] font-serif absolute md:relative  h-screen z-20  text-white  space-y-10 p-12  rounded-lg mt-2 mr-2 mb-2 overflow-y-auto transition-all duration-500 ${
          click ? "translate-x-[100]" : "translate-x-[-100%]"
        }`}
      >
        <div className="user-con">
          <div className="text-white ">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <ul className="menu-items flex flex-col justify-start items-start space-y-4">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={active === item.id ? "active" : ""}
              >
                <div className="space-x-2">
                  {item.icon}
                  <span className="cursor-pointer">{item.title}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="bottom-nav absolute bottom-2 p-4">
          <Link to={"/"} rel="ref" onClick={() => signOut()}>
            {settings} Sign Out
          </Link>
        </div>
      </NavStyled>
    </>
  );
}

const NavStyled = styled.nav`
  .active {
    color: #19edb8 !important;
  }
`;

export default Navigation;
