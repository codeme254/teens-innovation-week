import { MdPhoneIphone } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { RxCalendar } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";
const EventDetails = () => {
  return (
    <section className="event-details">
      <div className="event-details__container">
        <div className="detail">
          <MdPhoneIphone />
          <h4 className="detail__text">+254719802466</h4>
        </div>

        <div className="detail">
          <GrMapLocation />
          <h4 className="detail__text">Woodcreek School</h4>
        </div>

        <div className="detail">
          <RxCalendar />
          <h4 className="detail__text">
            5<sup>th</sup> - 7<sup>th</sup> Dec 2023
          </h4>
        </div>

        <div className="detail">
          <IoMdMail />
          <h4 className="detail__text">steamlabsafrica@gmail.com</h4>
        </div>
      </div>
    </section>
  );
};
export default EventDetails;
