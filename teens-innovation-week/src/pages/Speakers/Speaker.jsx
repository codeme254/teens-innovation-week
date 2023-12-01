const Speaker = ({ speakerName, image, occupation }) => {
  return (
    <div className="speaker">
      <div className="speaker__image">
        <img src={image} alt={speakerName} className="speaker__image--img" />
      </div>
      <h4 className="speaker__name">{speakerName}</h4>
      <p className="speaker__occupation">{occupation}</p>
    </div>
  );
};
export default Speaker;
