import React, {useState} from "react";
import Competiton from "../../tournaments/tournaments";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
//function NewPage


const names = [
      "Sony Open in Hawaii",
       "The Honda Classic",
       "Puerto Rico Open",
       "Farmers Insurance Open",
       "Valero Texas Open",
       "Arnold Palmer Invitational",
       "Sanderson Farms Championship",
       "Hero World Open",
       "PGA Championship",
       "The Wynbham Championship",
       "The RSM Classic",
       "The BMW Championship",
       "The Open",
       "The Masters",
       "U.S. Open",
       "Wells Fargo Championship",
       "The Players Championship",
       "The Masters Tournament",
       "RBC Canadian Open",
       "RBC Heritage",
       "Zuric Classic of New Orleans",
       "AT&T Byron Nelson Championship",
       "The Travelers Championship",
       "John Deere Classic",
       "Barracuda Championship"  
    ]; 

function Week(){
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
      setOpenItems(prevState => ({
          ...prevState,
          [index]: !prevState[index]
      }));
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mt-1.5 p-5 bg-black text-l text-white">
        <div className="flex w-[320px] flex-col justify-center items-center bg-green-500 text-white rounded-2xl">
          <h className="text-center text-2xl font-bold">
            <span className="text-white">Golf LeaderBoard</span>
          </h>
        <div className="max-w-lg mx-auto p-4">
          <h1 className="text-center text-xl font-bold">
            <span className="text-white">Yearly</span>
          </h1>
            <ul>
                {names.yearly.map((name, index) => (
                    <li
                        key={index}
                        className={`p-4 border rounded-full cursor-pointer relative ${openItems[index] ? 'bg-gray-200' : ''}`}
                        onClick={() => toggleItem(index)}
                    >
                        {name}
                        <span className={`absolute right-4 transform transition-transform ${openItems[index] ? 'rotate-180' : 'rotate-0'}`}>
                            ▼
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        </div>
      </div>
     
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Week;
