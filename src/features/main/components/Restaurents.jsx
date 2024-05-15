import kfc from "../../../assets/logo-kfc.png";
import pizzaHut from "../../../assets/pizza-hut.png";
import mcdonalds from "../../../assets/mcdonalds.png";
import starbucks from "../../../assets/starbucks.png";
import burgerking from "../../../assets/burger-king.png";
import mask from "../../../assets/mask.png";

const Restaurents = () => {
  const restuarents = [
    {
      src: kfc,
      alt: "kfc",
    },
    {
      src: pizzaHut,
      alt: "pizzaHut",
    },
    {
      src: mcdonalds,
      alt: "mcdonalds",
    },
    {
      src: starbucks,
      alt: "starbucks",
    },
    {
      src: burgerking,
      alt: "burgerking",
    },
    {
      src: mask,
      alt: "mask",
    },
  ];
  return (
    <div className="mt-5">
      <p className="text-center font-medium text-[16px]">
        Trusted by over 50 thousand restaurants in 10+ countries
      </p>
      <div className="flex justify-around items-center flex-wrap mt-10">
        {restuarents.map((val, index) => {
          return <img src={val.src} alt={val.alt} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Restaurents;
