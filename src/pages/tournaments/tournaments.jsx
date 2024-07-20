import React from "react";
import TheMasters2 from "./full info/themaster2";
import TheOpen2 from "./full info/theopen2";
import UsPga2 from "./full info/uspga2";
import OpenChamp2 from "./full info/openchamp2";


function Competiton() {
  return (
    <div className="mt-[35px] p-5 text-[30px] text-white flex bg-transparent">
      <UsPga2 />
      <OpenChamp2 />
      <TheMasters2 />
      <TheOpen2 />
    </div>
  );
}
//map all the dialogues and make individual pages which are maped with links
export default Competiton;
