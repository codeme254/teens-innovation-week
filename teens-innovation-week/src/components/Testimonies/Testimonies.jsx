import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Testimony from "./Testimony";
import testimoniesData from "./testimoniesData";
const Testimonies = () => {
  const splideOptions = {
    rewind: true,
    width: "100%",
    autoplay: true,
  };
  return (
    <section className="testimonies">
      <h2 className="section-title">Testimonies</h2>

      <div className="slider-container">
        <Splide aria-label="testimonies" options={splideOptions}>
          {testimoniesData.map((testimony, i) => (
            <SplideSlide key={i}>
              <Testimony
                author={testimony.author}
                testimony={testimony.testimony}
                authorOccupation={testimony.authorOccupation}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};
export default Testimonies;
