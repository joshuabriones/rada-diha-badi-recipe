import Link from "next/link";
import React from "react";

const Header = () => {
  const navData = [
    {
      title: "Generate",
      link: "/",
    },
    {
      title: "Recipes",
      link: "/recipes",
    },
    {
      title: "About us",
      link: "/",
    },
  ];
  return (
    <nav className="w-full py-5 px-[15%] bg-slate-50 flex justify-between items-center border-b-2 border-slate-200 rounded-2xl mt-4">
      <h1 className="font-bold text-xl">
        Recipe <span className="text-yellow-600">Generator</span>
      </h1>
      <ul className="flex gap-6 font-medium text-lg">
        {navData.map((navItem) => (
          <li key={navItem.title} className="hover:text-yellow-500">
            <Link href={navItem.link}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
