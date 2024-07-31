import React from "react";
import Header from "../components/Header/Header"
import Competiton from "./tournaments/tournaments";
import Footer from "../components/Footer/Footer";
//function NewPage

//need to fix background and impliment my form to home page

function Home() {
  return (
    <div className="body">
      <Header />
      <Competiton />
      <div className="relative bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
