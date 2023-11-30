import aboutImage from "../../assets/images/about-image.jpg";
const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About teens innovation week</h2>
      <div className="about__container">
        <p className="about__container--text">
          In a rapidly evolving world, the Teens Innovation Summit empowers and
          prepares the next generation of leaders to drive positive change. This
          groundbreaking event, specifically tailored for teenagers between the
          ages of 12 and 19, serves as a catalyst for innovation, collaboration,
          and problem-solving. Bringing together high school students,
          educators, and experts from various industries, The Summit creates a
          supportive and collaborative environment for self-directed
          exploration, innovation and communication using STEAM pedagogies, and
          edTech tools.
        </p>
        <img src={aboutImage} className="about-image" />
      </div>
    </section>
  );
};
export default About;
