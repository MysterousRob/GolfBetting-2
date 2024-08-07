import React, {useState} from "react";
import Competiton from "../../tournaments/tournaments";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
//function NewPage


const names = [
        "The British Open",
        "The US Open",
        "The Masters",
        "The PGA Championship",
        "The Ryder Cup",
        "The Players Championship",
        "The Tour Championship",
        "The Memorial Championship",
        "The Arnold Palmer Invitational",
        "The BMW PGA Championship"
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
      <div className="mt-1.5 p-5 bg-black text-2xl text-white">
        <div className="flex w-[400px] flex-col justify-center items-center bg-green-500 text-white">
        <div className="max-w-lg mx-auto p-4">
            <ul>
                {names.map((name, index) => (
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
