import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Speaker from "./Speaker";
import img from "../../assets/images/speaker5.jpg";
import img2 from "../../assets/images/speaker7.jpg";
import img3 from "../../assets/images/speaker8.jpg";
const Speakers = () => {
  return (
    <div className="speakers">
      <Header />
      <h3 className="section-title u-marg-top-lg">Speakers</h3>
      <div className="speakers__container">
        <Speaker
          image={img}
          speakerName="Jane doe"
          occupation="STEAM educator @STEAMLabs"
        />
        <Speaker
          image={img2}
          speakerName="Jane doe"
          occupation="STEAM educator @STEAMLabs"
        />
        <Speaker
          image={img3}
          speakerName="Jane doe"
          occupation="STEAM educator @STEAMLabs"
        />
      </div>
      <Footer />
    </div>
  );
};
export default Speakers;
