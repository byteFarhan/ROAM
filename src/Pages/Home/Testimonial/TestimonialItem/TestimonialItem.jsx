const TestimonialItem = ({ review }) => {
  const { author, authorImg, description } = review;
  return (
    <div className="p-6 mr-4 rounded-md md:mr-6 bg-gray dark:bg-natural">
      <img
        src={authorImg}
        alt={author}
        className="object-cover mx-auto rounded-full cursor-pointer size-24"
      />
      <div className="flex justify-center mt-3">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="bg-orange-400 mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-2"
            className="bg-orange-400 mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-2"
            className="bg-orange-400 mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-2"
            className="bg-orange-400 mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-2"
            className="bg-orange-400 mask mask-star-2"
            checked
            readOnly
          />
        </div>
      </div>

      <div className="mt-3 space-y-3 text-center">
        <h4 className="text-2xl font-bold dark:text-white">{author}</h4>
        <p className="dark:text-gray">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
