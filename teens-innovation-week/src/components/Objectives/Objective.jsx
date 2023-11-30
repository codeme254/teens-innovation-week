const Objective = ({ image, title, description, transformClass }) => {
  return (
    <div className={`objective ${transformClass}`}>
      <div className="objective__image">
        <img
          src={image}
          alt={`Objective: ${title}`}
          className="objective__image"
        />
      </div>
      <div className="objective__body">
        <h2 className="objective__title">{title}</h2>
        <p className="objective__text">{description}</p>
      </div>
    </div>
  );
};
export default Objective;
