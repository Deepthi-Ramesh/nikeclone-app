import React,{useState,useref} from "react";
import "./slidertop.css"
const text = [
              `It's taking us a bit longer than usual to get your order to you.\nThank you for your patience`,
               `HELLO NIKE APP \n Download the app to access everything Nike. Get Your Great`,
               "FREE DELIVERY \n Applies to orders of ₹14,000 or more. View details",
               "SAVE UP TO 40% \nShop All Our New Markdowns"
            ];
const delay = 2500;
function Slidetop() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === text.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);
  return (
    <div className="slideshow">
      <div className="slideshowSlider"
       style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
      {text.map((backgroundColor, index) => (
          <div className="slide" key={index} ><p className="slide-para">{backgroundColor}</p></div>
        ))}
      </div>
    </div>
  );
}
export default Slidetop