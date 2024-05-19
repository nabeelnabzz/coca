const TestimonialCard = ({
  description,
  image,
  name,
  designation,
  color,
  bgcolor,
}) => {
  return (
    <div className={`${color} ${bgcolor} p-5`}>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium whitespace-normal">
        {description}
      </p>
      <div className="flex items-center gap-2">
        <img src={image} alt={image} />
        <div>
          <p className="font-medium">{name}</p>
          <p className="font-normal">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
