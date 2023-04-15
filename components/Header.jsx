import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategoryMenu, setshowCategoryMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.screenY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };


  
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/191/986/original/circle-logo-png.png"
            alt="logo"
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu
          showCategoryMenu={showCategoryMenu}
          setshowCategoryMenu={setshowCategoryMenu}
        />

        {mobileMenu && (
          <MenuMobile
            showCategoryMenu={showCategoryMenu}
            setshowCategoryMenu={setshowCategoryMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center text-black gap-2">
          {/* Icon Start */}
          <div className="w-8 md:w-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[14px] md:text-[30px]" />
            <span className="h-[14px] w-[14px] md:h-[18px] min-w-[14px] md:w-[18px]  rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[15px]">
              51
            </span>
          </div>
          {/* Icon end */}

          {/* Icon Start */}
          <div className="w-8 md:w-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[20px] md:text-[30px]" />
            <span className="h-[14px] w-[14px] md:h-[18px] min-w-[14px] md:w-[18px]  rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[15px]">
              5
            </span>
          </div>
          {/* Icon End */}

          {/* mobile icon start */}
          <div className="w-8 md:w-12 rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <FaBars
                className="text-[16px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
