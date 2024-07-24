import React, { useState, useEffect } from "react";
import "./../../state/footerData";
import { Slider1 } from "./Differentsliders";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
//import { sliderData } from "./sliderdata";

function MultiVariableSlider() {
  const [dropdownOpen, setDropdownOpen] = useState([false, false, false, false, false, false]);
  const [sliderValues, setSliderValues] = useState([
    //event form 
    {title: 'Event Form', value: '0', 
        children:[
          {title: 'Event Average', value: '0'},
          {title: 'Event-10', value: '0'},
          {title: 'Event Wins', value: '0'},
          {title: 'Last Year Tournament', value: '0'},
    ]},
//current form
// sliderValues[1].children[0].title 
// sliderValues[1].children[1].title
    {title: 'Current Form', value: '0',         
      children:[
      {title: 'OWGR', value: '0'},     
      {title: 'Last Tournament', value: '0'},
      {title: 'Last but 1 Tournament', value: '0'},
      {title: 'Last but 3 Tournament', value: '0'},
      {title: 'Last but 5 Tournament', value: '0'},
]},
//scoring stats
    {title: 'Scoring Stats', value: '0',
      children:[
      {title: 'Hole in One Average', value: '0'},
      {title: 'Birdie Average', value: '0'},
      {title: 'Eagle Average', value: '0'},
      {title: 'Bogey Average', value: '0'},
      {title: 'Par 3 Performance', value: '0'},
      {title: 'Par 4 Performance', value: '0'},
      {title: 'Par 5 Performance', value: '0'},
]},
//Event Specific
// sliderValues[3].children[0].title
    {title: 'Event Specific', value: '0',
    children:[
    {title: 'Par 70', value: '0'},
    {title: 'Short Course', value: '0'},
    {title: 'Bermuda Postive', value: '0'},
    {title: 'Soft Ground', value: '0'},
    {title: 'Fazio Design', value: '0'},
    {title: 'Costal Course', value: '0'},
]},
//Strokes Gained
    {title: 'Strokes Gained', value: '0',
    children:[
    {title: 'SG off the Tee', value: '0'},
    {title: 'SG Approach', value: '0'},
    {title: 'SG Tee to Green', value: '0'},
    {title: 'SG arround the Green', value: '0'},
    {title: 'SG Putting', value: '0'},
]},
//skill stats
    {title: 'Skill Stats', value: '0',
    children:[
    {title: 'Driving Distance', value: '0'},
    {title: 'Proximity to Hole', value: '0'},
    {title: 'Going for Green', value: '0'},
    {title: 'Driving Accuracy', value: '0'},
    {title: 'GIR', value: '0'},
    {title: 'Scrambling', value: '0'},
    {title: 'Sand Saves', value: '0'},
    {title: 'Putting Average', value: '0'},
    {title: 'Puts per Round', value: '0'},
]},
  ]);

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleSliderChange = (newValue) => {
    setSliderValues(newValue);
  };

  console.log("Dropdown open state:", dropdownOpen);


  useEffect(() => {
    console.log('sliderValues in sliders.js:', sliderValues)
  }, [sliderValues])


  return (
    <div>
      <div className="flex flex-col p-5 ml-[15%]">
        {/* event form */}
        <div tabIndex={0} className="relative rounded-lg bg-white text-black mb-5 px-3 py-[7px]">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">Event Form</p>
            <Slider1 
              parentTitle="Event Form" 
              max={10} 
              parent={true}
              setSliderValues={setSliderValues}
              value={sliderValues[0].value} />
            {dropdownOpen[0] ? (
              <FaArrowCircleUp onClick={() => toggleDropdown(0)} />
            ) : (
              <FaArrowCircleDown onClick={() => toggleDropdown(0)} />
            )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[0] ? "show" : "hidden"}`}>
            {sliderValues[0].children.map((child, idx) => (
              <li className="list-none p-0 m-0 block" key={idx}>
                <p className="text-black">{child.title}</p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={child.value}
                  setSliderValues={setSliderValues}
                  parentTitle="Event Form"
                  childTitle={child.title}
                />
              </li>
            ))}
          </ul>
        </div>
       {/* current form */}
       <div tabIndex={1} className="relative rounded-lg bg-white text-black mb-5 px-3 py-[7px]">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">Current Form</p>
            <Slider1 
              parentTitle="Current Form"
              max={10} 
              parent={true}
              setSliderValues={setSliderValues}
              value={sliderValues[1].value} />
            {dropdownOpen[1] ? (
              <FaArrowCircleUp onClick={() => toggleDropdown(1)} />
            ) : (
              <FaArrowCircleDown onClick={() => toggleDropdown(1)} />
            )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[1] ? "show" : "hidden"}`}>
            {sliderValues[1].children.map((child, idx) => (
              <li className="list-none p-0 m-0 block" key={idx}>
                <p className="text-black">{child.title}</p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={child.value}
                  setSliderValues={setSliderValues}
                  parentTitle="Current Form"
                  childTitle={child.title}
                />
              </li>
            ))}
          </ul>
        </div>
       {/* Scoring stats */}
       <div tabIndex={2} className="relative rounded-lg bg-white text-black mb-5 px-3 py-[7px]">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">Scoring Stats</p>
            <Slider1 
              parentTitle="Scoring Stats"
              max={10} 
              parent={true}
              setSliderValues={setSliderValues}
              value={sliderValues[2].value} />
            {dropdownOpen[2] ? (
              <FaArrowCircleUp onClick={() => toggleDropdown(2)} />
            ) : (
              <FaArrowCircleDown onClick={() => toggleDropdown(2)} />
            )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[2] ? "show" : "hidden"}`}>
            {sliderValues[2].children.map((child, idx) => (
              <li className="list-none p-0 m-0 block" key={idx}>
                <p className="text-black">{child.title}</p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={child.value}
                  setSliderValues={setSliderValues}
                  parentTitle="Scoring Stats"
                  childTitle={child.title}
                />
              </li>
            ))}
          </ul>
        </div>
       {/* event specific */}
       <div tabIndex={3} className="relative rounded-lg bg-white text-black mb-5 px-3 py-[7px]">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">Event Specific</p>
            <Slider1 
              parentTitle="Event Specific"
              max={10} 
              parent={true}
              setSliderValues={setSliderValues}
              value={sliderValues[3].value} />
            {dropdownOpen[3] ? (
              <FaArrowCircleUp onClick={() => toggleDropdown(3)} />
            ) : (
              <FaArrowCircleDown onClick={() => toggleDropdown(3)} />
            )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[3] ? "show" : "hidden"}`}>
            {sliderValues[3].children.map((child, idx) => (
              <li className="list-none p-0 m-0 block" key={idx}>
                <p className="text-black">{child.title}</p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={child.value}
                  setSliderValues={setSliderValues}
                  parentTitle="Event Specific"
                  childTitle={child.title}
                />
              </li>
            ))}
          </ul>
        </div>
       {/* Strokes Gained*/}
       <div tabIndex={4} className="relative rounded-lg bg-white text-black mb-5 px-3 py-[7px]">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">Strokes Gained</p>
            <Slider1 
              parentTitle="Strokes Gained"
              max={10} 
              parent={true}
              setSliderValues={setSliderValues}
              value={sliderValues[4].value} />
            {dropdownOpen[4] ? (
              <FaArrowCircleUp onClick={() => toggleDropdown(4)} />
            ) : (
              <FaArrowCircleDown onClick={() => toggleDropdown(4)} />
            )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[4] ? "show" : "hidden"}`}>
            {sliderValues[4].children.map((child, idx) => (
              <li className="list-none p-0 m-0 block" key={idx}>
                <p className="text-black">{child.title}</p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={child.value}
                  setSliderValues={setSliderValues}
                  parentTitle="Strokes Gained"
                  childTitle={child.title}
                />
              </li>
            ))}
          </ul>
        </div>
       {/* skill stats */}
       <div tabIndex={5} className="relative rounded-lg bg-white text-black mb-5 px-3 py-[7px]">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">Skill Stats</p>
            <Slider1 
              parentTitle="Skill Stats"
              max={300} 
              parent={true}
              setSliderValues={setSliderValues}
              value={sliderValues[5].value} />
            {dropdownOpen[5] ? (
              <FaArrowCircleUp onClick={() => toggleDropdown(5)} />
            ) : (
              <FaArrowCircleDown onClick={() => toggleDropdown(5)} />
            )}
          </div>
          <ul className={`dropdown-content ${dropdownOpen[5] ? "show" : "hidden"}`}>
            {sliderValues[5].children.map((child, idx) => (
              <li className="list-none p-0 m-0 block" key={idx}>
                <p className="text-black">{child.title}</p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={child.value}
                  setSliderValues={setSliderValues}
                  parentTitle="Skill Stats"
                  childTitle={child.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MultiVariableSlider;
