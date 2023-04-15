import React from "react";

import Link from "next/link";

import { BsChevronDown } from "react-icons/bs";

const menus = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({
  showCategoryMenu,
  setshowCategoryMenu,
  setMobileMenu,
}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(180vh-50px)] bg-white border-t text-black">
      {menus.map((menu) => {
        return (
          <React.Fragment key={menu.id}>
            {!!menu?.subMenu ? (
              <li
                className="cursor-pointer p-5 border-b flex flex-col relative"
                onClick={() => setshowCategoryMenu(!showCategoryMenu)}
              >
                <div className="flex justify-between items-center">
                  {menu.name}
                  <BsChevronDown size={14} />
                </div>

                {showCategoryMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          onClick={() => {
                            setshowCategoryMenu(false);
                            setMobileMenu(false);
                          }}
                          key={submenu.id}
                          href="/"
                          className="flex gap- justify-between"
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {submenu.name}
                          </li>
                          <span className="opacity-50 text-sm p-5">11</span>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={menu?.url} onClick={() => setMobileMenu(false)}>
                  {menu.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
