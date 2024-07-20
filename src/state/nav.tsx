import React from "react";
import "./../main";

type NavOption = {
  href: string,
  title: string
}

export let navOptions: NavOption[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/Week",
    title: "Bets of the Week",
  },
  {
    href: "/Tips",
    title: "Golf Betting Tips",
  },
  {
    href: "/Odds",
    title: "Live-Odds",
  },
  {
    href: "/Sites",
    title: "Golf Betting Sites",
  },
];

// quickLink2 component
// export const quickLink2 = () => {
//   return (
//     <>
//       {quickLinks.map((nav, i) => (
//         <Link key={i} to={nav.href}>
//           <p>
//             {nav.title}
//           </p>
//         </Link>
//       ))}
//     </>
//   );
// };
