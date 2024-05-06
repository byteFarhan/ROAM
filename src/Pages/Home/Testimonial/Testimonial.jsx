import SectionIntro from "../../Shared/SectionIntro/SectionIntro";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/testimonial/")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <section className="pb-16 lg:pb-24 dark:bg-[#202124]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={`Unforgettable Adventures Await`}
          subTitle={`Explore More`}
          description={`Embark on epic journeys with our travel agency. Discover breathtaking destinations, experience local cultures, and create lasting memories. Let us turn your dreams into extraordinary adventures.`}
        />
      </div>
    </section>
  );
};

export default Testimonial;
