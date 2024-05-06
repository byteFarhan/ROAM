import { useEffect, useState } from "react";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import Country from "./Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/countries/")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <>
      <section className="py-16 md:py-24 dark:bg-[#202124]">
        <div className="max-w-7xl mx-auto">
          <SectionIntro
            title={`Explore the World for Yourself`}
            subTitle={`Modern & Beautiful`}
            description={`Embark on a journey of self-discovery by exploring the world around you. Seek new experiences, cultures, and perspectives to enrich your life and broaden your horizons.`}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-2 px-5 lg:px-0">
            {countries?.length > 0 &&
              countries.map((country, idx) => (
                <Country key={idx} country={country} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Countries;
