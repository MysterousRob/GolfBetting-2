import React from 'react';
import "./../../assets/css/GBS.css";


export function Slider1({
  parentTitle,
  childTitle,
  setSliderValues,
  max = 10,
  value,
  parent,
}) {
  return (
    <div className="slider-input1">
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(event) => {
          const newValue = event.target.value;
          setSliderValues((prev) => {
            if (parent) {
              return prev.map((slider) => {
                if (slider.title === parentTitle) {
                  return {
                    ...slider,
                    value: newValue,
                    children: slider.children.map((child) => ({
                      ...child,
                      value: newValue,
                    })),
                  };
                }
                return slider;
              });
            }
            return prev.map((slider) => {
              if (slider.title === parentTitle) {
                return {
                  ...slider,
                  children: slider.children.map((childSlider) => {
                    if (childSlider.title === childTitle) {
                      return {
                        ...childSlider,
                        value: newValue,
                      };
                    }
                    return childSlider;
                  }),
                };
              }
              return slider;
            });
          });
        }}
        className="range range-primary"
      />
    </div>
  );
}
