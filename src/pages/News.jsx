import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function News() {
  return (
    <div>
      <Header />
      <div>
        <h1>News Page</h1>
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default News;
