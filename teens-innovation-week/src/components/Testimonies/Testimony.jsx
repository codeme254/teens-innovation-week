const Testimony = ({ testimony, author, authorOccupation }) => {
  return (
    <div className="testimony">
      <p className="testimony__text">{testimony}</p>
      <div className="testimony__author">
        <h5 className="testimony__author--name">{author}</h5>
        <p className="testimony__author--positon">{authorOccupation}</p>
      </div>
    </div>
  );
};
export default Testimony;
