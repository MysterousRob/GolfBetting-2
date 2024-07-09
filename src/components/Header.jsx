import React from "react";
//import './../assets/css/App-header.css';
import { Link } from "react-router-dom";
import { navOptions } from "./../state/nav";
//function NewPage

function Header() {
  return (
    <div className="text-white">
      <header className="bg-black min-h-[50px] flex items-center justify-center p-5 text-[calc(10px+2vmin)] text-[35px]">
        <h1 className="p-1.5">Golf Betting</h1>
        <div className="flex items-baseline bg-transparent text-base gap-2 p-2">
          {navOptions.map((nav, i) => (
            <Link key={i} to={nav.href}>
              <p className="border border-transparent p-0.5 hover:border-white transition-colors duration-500 rounded">
                {nav.title}
              </p>
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Header;
