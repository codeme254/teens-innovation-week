import { MdPhoneIphone } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { RxCalendar } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__textbox">
        <h1 className="hero__textbox--text-main">Teens innovation week</h1>
        <div className="hero__details">
          <div className="hero__detail">
            <MdPhoneIphone />
            <p className="hero__detail--text">0719802466</p>
          </div>
          <div className="hero__detail">
            <GrMapLocation />
            <p className="hero__detail--text">Woodcreek School</p>
          </div>
          <div className="hero__detail">
            <RxCalendar />
            <p className="hero__detail--text">
              5<sup>th</sup> - 7<sup>th</sup> Dec 2023
            </p>
          </div>
          <div className="hero__detail">
            <IoMdMail />
            <p className="hero__detail--text">steamlabsafrica@gmail.com</p>
          </div>
        </div>
        <p className="hero__detail--vision">
          Cultivate a culture of innovation and creativity in Africa's
          education, empowering solution architects.
        </p>
        <a href="https://forms.gle/bGjp6izcGZ5VKFdf7" target="_blank" className="hero__cta">
          Book a slot
        </a>
      </div>
    </section>
  );
};
export default Hero;
