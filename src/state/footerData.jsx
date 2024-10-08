import React from "react";
import { NavLink } from 'react-router-dom';
import { navOptions } from "./nav";


//making nested array (FOLLOW STRUCTURE, DONT DOUBT IT, JUST DO IT)
export const foot = [
    {
        title: "Golf Predictions",
        links:  [
            {
                title: "News",
                href: "/News",
            },
            {
                title: "Live Standing",
                href: "/Scores",
            },
            {
                title: "Life-Time Scores",
                href: "",
            },
            {
                title: "GBS Predictor",
                href: "",
            },
            {
                title: "GBS Predictor Info",
                href: "/Info",
            },
            {
                title: "",
                href: "",
            },
            {
                title: "",
                href: "",
            },
        ],
    },
    {
        title: "Quick links",
        links:  [
            {
                title: "Home",
                href: "../",
            },
            {
                title: "Golf Betting Tips",
                href: "../Tips",
            },
            {
                title: "Live Golf Odds",
                href: "../Odds",
            },
            {
                title: "Golf Bets of the Week",
                href: "../Week",
            },
            {
                title: "",
                href: "",
            },
            {
                title: "",
                href: "",
            },
        ],
    },
    {
        title: "Tournaments",
        links:  [
            {
                title: "The Masters",
                href: "../Masters",
            },
            {
                title: "The Open Championship",
                href: "../OpenChamp",
            },
            {
                title: "US PGA Championship",
                href: "../PGA",
            },
            {
                title: "The US Open",
                href: "../Open",
            },
            {
                title: "",
                href: "",
            },
        ],
    },
    {
        title: "Betting Offers",
        links:  [
            {
                title: "Betting Sites",
                href: "/Sites",
            },
            {
                title: "Betting Promotions",
                href: "",
            },
        ],
    },
    {
        title: "Contact Us",
        links:  [
            {
                title: "About Us",
                href: "/About",
            },
            {
                title: "Form",
                href: "",
            },
        ],
    },
]

export const Foot2 = () => {
    return (
        <>
        {foot.map((footItems, i) => (
          <div key={i} className="flex flex-col">
            <h2 className="mb-4 border-b border-white">{footItems.title}</h2>
            {footItems.links.map((nav, j) => (
              <NavLink key={j} to={nav.href}>
                <p className="">
                  {nav.title}
                </p>
              </NavLink>
            ))}
          </div>
        ))}
      </>
      );
}
//make this into routes for the footerside of the webpage