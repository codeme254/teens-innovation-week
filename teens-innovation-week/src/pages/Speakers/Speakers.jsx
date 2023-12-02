import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Speaker from "./Speaker";
import isaac from "../../assets/images/isaac-macharia.jpg";
import drOmbui from "../../assets/images/dr-ombui.jpg";
import kambo from "../../assets/images/kambo.jpeg";
import imgDefault from "../../assets/images/user-placeholder.png";
import Partners from "../../components/Partners/Partners";

const Speakers = () => {
  return (
    <div className="speakers">
      <Header />
      <h3 className="section-title u-marg-top-lg">Speakers</h3>
      <div className="speakers__container">
        <Speaker
          image={isaac}
          speakerName="Isaac Macharia Gathu"
          occupation="President and founder of Mars Society Kenya"
        />
        <Speaker
          image={drOmbui}
          speakerName=" Dr. Edward Ombui"
          occupation="Dean of School of Science and Technology of Africa Nazarene University"
        />
        <Speaker
          image={kambo}
          speakerName="Mary W. Kambo"
          occupation="Cybergirls Alumna representing Cybersafe Foundation, with expertise in Technology and Innovation"
        />
        <Speaker
          image={imgDefault}
          speakerName="Noreen Kassam"
          occupation="World Largest Lesson"
        />
        <Speaker
          image={imgDefault}
          speakerName="Andrew Masila"
          occupation="Head of Innovations, Safaricom"
        />
        <Speaker
          image={imgDefault}
          speakerName="Virginia Wawira"
          occupation="MPESA GO, Product Owner"
        />
        <Speaker
          image={imgDefault}
          speakerName="Jasin Owili"
          occupation="CEO Afribot"
        />
      </div>
      <Partners />
      <Footer />
    </div>
  );
};
export default Speakers;
