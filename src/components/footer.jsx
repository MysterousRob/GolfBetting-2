import React from "react";
import "./../assets/css/footer.css";
import { Foot2 } from "../state/footerData";

function Footer() {
  return (
    <div className="bg-black text-white m-0 p-2 box-border flex flex-col">
      <div className="bg-black h-15 text-white flex justify-center items-center gap-1.5 font-oswald w-screen m-0 p-0">
        <p className="warning">18</p>
        <p className="text-lg">Please gamble responsably 👀</p>
      </div>
      <footer className="p-5 bg-black text-white text-center text-lg flex justify-between w-screen">
        <Foot2 />
      </footer>
    </div>
  );
}

export default Footer;
