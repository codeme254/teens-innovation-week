import Objective from "./Objective";
import objectivesData from "./objectivesData";
const Objectives = () => {
  return (
    <section className="objectives-section" id="objectives">
      <h2 className="section-title u-col-black">
        Objectives of the teens innovation week
      </h2>
      <div className="objectives__container">
        {objectivesData.map((objective, i) => (
          <Objective
            key={i}
            image={objective.image}
            title={objective.title}
            description={objective.description}
            transformClass={i == 0 ? `` : `objective--${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
export default Objectives;
