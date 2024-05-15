import { useState } from "react";

const Carousel = ({ data, cardsToShow }) => {
  console.log('data', data)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow < data.length ? prevIndex + cardsToShow : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsToShow >= 0
        ? prevIndex - cardsToShow
        : data.length - cardsToShow
    );
  };

  return (
    <div className="bg-secondary w-full h-full m-auto flex flex-col justify-center items-center transition-transform duration-500 ease-in-out">
      <div className="flex flex-col sm:flex-row gap-2">
        {Array.from({ length: cardsToShow }).map((_, index) => {
          const dataIndex = (currentIndex + index) % data.length;
          return (
            <div
              className={
                "flex gap-2 p-[1rem] justify-center items-center rounded-[20px]"
              }
              key={index}
            >
              fghjk
              <img
                src={data.profilePicture}
                alt={""}
                width={120}
                height={120}
              />
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 pt-5">
        <button onClick={handlePrev}>next</button>
        <button onClick={handleNext}>prev</button>
      </div>
    </div>
  );
};

export default Carousel;
