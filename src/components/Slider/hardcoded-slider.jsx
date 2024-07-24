import React, { useState, useEffect } from "react";
import "./../../state/footerData";
import { Slider1 } from "./Differentsliders";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
//import { sliderData } from "./sliderdata";

function MultiVariableSlider() {
  const [dropdownOpen, setDropdownOpen] = useState([false, false]);
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
//soring stats
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
    {title: 'Driving Acuracy', value: '3'},
    {title: 'GIR', value: '4'},
    {title: 'Scrambling', value: '5'},
    {title: 'Sand Saves', value: '6'},
    {title: 'Putting Average', value: '7'},
    {title: 'Puts per Round', value: '8'},
]},
  ]);

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) => {
      console.log("Previous state:", prevState);
      const newState = [...prevState];
      newState[index] = !newState[index];
      console.log("New state:", newState);
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
      <div className="bg-white flex flex-col ml-[15%]">
        {/* event form */}
        <div tabIndex={0} className="relative text-black mb-5">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">
              Event Form
            </p>
            
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
          <ul className={`dropdown-content ${dropdownOpen[0] ? "show" : ""}`}>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
                Event Average
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[0].children[0].value}
                  setSliderValues={setSliderValues}
                  childTitle="Event Average"
                  parentTitle="Event Form"
                />
              
            </li>
            <li className="list-none p-0 m-0 block" >
              <p className="text-black" >
                Event top 10
              </p>
                <Slider1
                  parentTitle="Event Form"
                  childTitle="Event-10"
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[0].children[1].value}
                  setSliderValues={setSliderValues}
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" >
                Event Wins
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[0].children[2].value}
                  setSliderValues={setSliderValues}
                  parentTitle="Event Form"
                  childTitle="Event Wins"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Last Season">
                Last Year Tournament
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[0].children[3].value}
                  setSliderValues={setSliderValues}
                  parentTitle="Event Form"
                  childTitle="Last Year Tournament"
                />
              
            </li>
          </ul>
        </div>
       {/* current form */}
       <div tabIndex={1} className="relative text-black mb-5">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">
              Current Form
            </p>
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
          <ul className={`dropdown-content ${dropdownOpen[1] ? "show" : ""}`}>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
                OWGR
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[1].children[0].value}
                  setSliderValues={setSliderValues}
                  childTitle="OWGR"
                  parentTitle="Current Form"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
                Last Tournament
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[1].children[1].value}
                  setSliderValues={setSliderValues}
                  childTitle="Last Tournament"
                  parentTitle="Current Form"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Last but 1 Tournament
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[1].children[2].value}
                  setSliderValues={setSliderValues}
                  childTitle="Last but 1 Tournament"
                  parentTitle="Current Form"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Last but 3 Tournament
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[1].children[3].value}
                  setSliderValues={setSliderValues}
                  childTitle="Last but 3 Tournament"
                  parentTitle="Current Form"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Last but 5 Tournament
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[1].children[4].value}
                  setSliderValues={setSliderValues}
                  childTitle="Last but 5 Tournament"
                  parentTitle="Current Form"
                />
              
            </li>
           
          </ul>
        </div>
       {/* Scoring stats */}
       <div tabIndex={2} className="relative text-black mb-5">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">
              Scoring Stats
            </p>
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
          <ul className={`dropdown-content ${dropdownOpen[2] ? "show" : ""}`}>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Hole in One Average
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[2].children[0].value}
                  setSliderValues={setSliderValues}
                  childTitle="Hole in One Average"
                  parentTitle="Scoring Stats"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Birdie Average
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[2].children[1].value}
                  setSliderValues={setSliderValues}
                  childTitle="Birdie Average"
                  parentTitle="Scoring Stats"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Eagle Average
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[2].children[2].value}
                  setSliderValues={setSliderValues}
                  childTitle="Eagle Average"
                  parentTitle="Scoring Stats"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Bogey Average
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[2].children[3].value}
                  setSliderValues={setSliderValues}
                  childTitle="Bogey Average"
                  parentTitle="Scoring Stats"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Par 3 Performance
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[2].children[4].value}
                  setSliderValues={setSliderValues}
                  childTitle="Par 3 Performance"
                  parentTitle="Scoring Stats"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Par 4 Performance
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[2].children[5].value}
                  setSliderValues={setSliderValues}
                  childTitle="Par 4 Performance"
                  parentTitle="Scoring Stats"
                />
              
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" title="Event Average">
              Par 5 Performance
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[2].children[6].value}
                  setSliderValues={setSliderValues}
                  childTitle="Par 5 Performance"
                  parentTitle="Scoring Stats"
                />
              
            </li>
           
          </ul>
        </div>
       {/* event specific */}
       <div tabIndex={3} className="relative text-black mb-5">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">
            Event Specific
            </p>
            
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
          <ul className={`dropdown-content ${dropdownOpen[3] ? "show" : ""}`}>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" >
              Par 70
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[3].children[0].value}
                  setSliderValues={setSliderValues}
                  childTitle="Par 70"
                  parentTitle="Event Specific"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" >
              Short Course
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[3].children[1].value}
                  setSliderValues={setSliderValues}
                  childTitle="Short Course"
                  parentTitle="Event Specific"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" >
              Bermuda Postive
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[3].children[2].value}
                  setSliderValues={setSliderValues}
                  childTitle="Bermuda Postive"
                  parentTitle="Event Specific"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" >
              Soft Ground
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[3].children[3].value}
                  setSliderValues={setSliderValues}
                  childTitle="Soft Ground"
                  parentTitle="Event Specific"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" >
              Fazio Design
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[3].children[4].value}
                  setSliderValues={setSliderValues}
                  childTitle="Fazio Design"
                  parentTitle="Event Specific"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black" >
              Costal Course
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[3].children[5].value}
                  setSliderValues={setSliderValues}
                  childTitle="Costal Course"
                  parentTitle="Event Specific"
                />
            </li>
           
          </ul>
        </div>
       {/* Strokes Gained*/}
       <div tabIndex={4} className="relative text-black mb-5">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">
            Strokes Gained
            </p>
            
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
          <ul className={`dropdown-content ${dropdownOpen[4] ? "show" : ""}`}>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              SG off the Tee
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[4].children[0].value}
                  setSliderValues={setSliderValues}
                  childTitle="SG off the Tee"
                  parentTitle="Strokes Gained"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              SG Approach
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[4].children[1].value}
                  setSliderValues={setSliderValues}
                  childTitle="SG Approach"
                  parentTitle="Strokes Gained"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              SG Tee to Green
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[4].children[2].value}
                  setSliderValues={setSliderValues}
                  childTitle="SG Tee to Green"
                  parentTitle="Strokes Gained"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              SG arround the Green
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[4].children[3].value}
                  setSliderValues={setSliderValues}
                  childTitle="SG arround the Green"
                  parentTitle="Strokes Gained"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              SG Putting
              </p>
                <Slider1
                  parent={false}
                  max={10}
                  className="w-[100px]"
                  value={sliderValues[4].children[4].value}
                  setSliderValues={setSliderValues}
                  childTitle="SG Putting"
                  parentTitle="Strokes Gained"
                />
            </li>
           
          </ul>
        </div>
       {/* skill stats */}
       <div tabIndex={5} className="relative text-black mb-5">
          <div role="button" className="flex justify-center relative">
            <p className="text-black">
            Skill Stats
            </p>
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
          <ul className={`dropdown-content ${dropdownOpen[5] ? "show" : ""}`}>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              Driving Distance
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[0].value}
                  setSliderValues={setSliderValues}
                  childTitle="Driving Distance"
                  parentTitle="Skill Stats"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              Proximity to Hole
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[1].value}
                  setSliderValues={setSliderValues}
                  childTitle="Proximity to Hole"
                  parentTitle="Skill Stats"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              Going for Green
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[2].value}
                  setSliderValues={setSliderValues}
                  childTitle="Going for Green"
                  parentTitle="Skill Stats"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              Driving Acuracy
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[3].value}
                  setSliderValues={setSliderValues}
                  childTitle="Driving Acuracy"
                  parentTitle="Skill Stats"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              GIR
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[4].value}
                  setSliderValues={setSliderValues}
                  childTitle="GIR"
                  parentTitle="Skill Stats"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              Scrambling
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[5].value}
                  setSliderValues={setSliderValues}
                  childTitle="Scrambling"
                  parentTitle="Skill Stats"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              Sand Saves
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[6].value}
                  setSliderValues={setSliderValues}
                  childTitle="Sand Saves"
                  parentTitle="Skill Stats"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              Putting Average
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[7].value}
                  setSliderValues={setSliderValues}
                  childTitle="Putting Average"
                  parentTitle="Skill Stats"
                />
            </li>
            <li className="list-none p-0 m-0 block">
              <p className="text-black">
              Puts per Round
              </p>
                <Slider1
                  parent={false}
                  max={300}
                  className="w-[100px]"
                  value={sliderValues[5].children[8].value}
                  setSliderValues={setSliderValues}
                  childTitle="Puts per Round"
                  parentTitle="Skill Stats"
                />
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MultiVariableSlider;