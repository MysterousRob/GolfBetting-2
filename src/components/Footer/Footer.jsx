import React from "react";
import { Foot2 } from "../../state/footerData";
import GambleAwareness from "/Footer-images/BeGambleAware.d42d189d.svg";
import Complience from "/Footer-images/DMCACompliance.c8c97173.svg";
import Commision from "/Footer-images/GamblingCommisionUK.webp";
import GameCare from "/Footer-images/GamCare.154da2ba.svg";
import MGA from "/Footer-images/mga-MaltaGamingAuthority.5a12a5ce.svg";
import "/Footer-images/icons8-18-plus-48.png";

function Footer() {
  return (
    <div className="bg-[#406134] text-white m-0 p-0 box-border flex flex-col">
      <div className="bg-[#097300] h-full text-white flex justify-center items-center gap-1.5 font-oswald w-screen m-0 p-0">
        <img
          src="./../../../public/Footer-images/icons8-18-plus-48.png"
          alt="18 Plus"
          className="w-10 h-10 m-0 p-0"
        />
        <p className="text-lg">Please gamble responsibly 👀</p>
      </div>
      <footer className="p-5 text-white text-center text-lg flex justify-between w-screen">
        <Foot2 />
        {/* images goe here */}
      </footer>
      <div className=" bg-[#097300] ">
        <div className="flex flex-row justify-center items-center gap-7 font-oswald w-screen m-0 p-0">
          <img src={MGA} alt="MGA" />
          <img src={GambleAwareness} alt="GambleAwareness" />
          <img src={Complience} alt="Compliance" />
          <img src={Commision} alt="Commission" />
          <img src={GameCare} alt="GameCare" />
        </div>
        <div>
          <p>
            Golf-Betting.com has no affiliation with the golf teams,
            tournaments, or organizations displayed on this website. We claim no
            credit for any associated images posted on this site unless
            otherwise noted. Images are copyright to their respective owners.
            Online wagering legality varies by jurisdiction. We urge you to
            verify local regulations before engaging in online betting.
            Golf-Betting.com does not assume responsibility for your actions. ©
            2024 Golf-Betting.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
