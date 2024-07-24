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
          {title: 'Event-10', value: '1'},
          {title: 'Event Wins', value: '2'},
          {title: 'Last Year Tournament', value: '3'},
    ]},
//current form
// sliderValues[1].children[0].title 
// sliderValues[1].children[1].title
    {title: 'Current Form', value: '1',         
      children:[
      {title: 'OWGR', value: '0'},     
      {title: 'Last Tournament', value: '1'},
      {title: 'Last but 1 Tournament', value: '2'},
      {title: 'Last but 3 Tournament', value: '3'},
      {title: 'Last but 5 Tournament', value: '4'},
]},
//scoring stats
    {title: 'Scoring Stats', value: '2',
      children:[
      {title: 'Hole in One Average', value: '0'},
      {title: 'Birdie Average', value: '1'},
      {title: 'Eagle Average', value: '2'},
      {title: 'Bogey Average', value: '3'},
      {title: 'Par 3 Performance', value: '4'},
      {title: 'Par 4 Performance', value: '5'},
      {title: 'Par 5 Performance', value: '6'},
]},
//Event Specific
// sliderValues[3].children[0].title
    {title: 'Event Specific', value: '3',
    children:[
    {title: 'Par 70', value: '0'},
    {title: 'Short Course', value: '1'},
    {title: 'Bermuda Postive', value: '2'},
    {title: 'Soft Ground', value: '3'},
    {title: 'Fazio Design', value: '4'},
    {title: 'Costal Course', value: '5'},
]},
//Strokes Gained
    {title: 'Strokes Gained', value: '4',
    children:[
    {title: 'SG off the Tee', value: '0'},
    {title: 'SG Approach', value: '1'},
    {title: 'SG Tee to Green', value: '2'},
    {title: 'SG arround the Green', value: '3'},
    {title: 'SG Putting', value: '4'},
]},
//skill stats
    {title: 'Skill Stats', value: '5',
    children:[
    {title: 'Driving Distance', value: '0'},
    {title: 'Proximity to Hole', value: '1'},
    {title: 'Going for Green', value: '2'},
    {title: 'Driving Accuracy', value: '3'},
    {title: 'GIR', value: '4'},
    {title: 'Scrambling', value: '5'},
    {title: 'Sand Saves', value: '6'},
    {title: 'Putting Average', value: '7'},
    {title: 'Puts per Round', value: '8'},
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
                  parentTitle="scoring stats"
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
