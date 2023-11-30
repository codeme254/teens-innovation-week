import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import EventDetails from "../../components/EventDetails/EventDetails";
import Objectives from "../../components/Objectives/Objectives";
import Ticket from "../../components/Ticket/Ticket";
import ContactRecap from "../../components/ContactRecap/ContactRecap";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
      <EventDetails />
      <Objectives />
      <Ticket />
      <ContactRecap />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
