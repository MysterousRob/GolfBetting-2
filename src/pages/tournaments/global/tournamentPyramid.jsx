import React from "react";
import PyramidItem from "./tournamentPyramidItem";

const Pyramid = ({ items }) => {
  // Created rows for the pyramid
  const pyramidRows = [
    items.slice(0, 4), // 4 items in the first row
    items.slice(4, 7), // 3 items in the second row
    items.slice(7, 9), // 2 items in the third row
    items.slice(9, 10), // 1 item in the fourth row
  ];

  return (
    <div className="flex flex-col items-center mt-8">
      {pyramidRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex space-x-4 mt-4 ${
            rowIndex > 0 ? "ml-" + rowIndex * 4 : ""
          }`}
        >
          {row.map((item, itemIndex) => (
            <PyramidItem
              key={itemIndex}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pyramid;
