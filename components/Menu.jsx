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

const Menu = ({ showCategoryMenu, setshowCategoryMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {menus.map((menu) => {
        return (
          <React.Fragment key={menu.id}>
            {!!menu?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setshowCategoryMenu(true)}
                onMouseLeave={() => setshowCategoryMenu(false)}
              >
                {menu.name}
                <BsChevronDown size={14} />

                {showCategoryMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          onClick={() => setshowCategoryMenu(false)}
                          key={submenu.id}
                          href="/category/1"
                          className="flex gap- justify-between"
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
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
              <li className="cursor-pointer">
                <Link href={menu?.url}>{menu.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
