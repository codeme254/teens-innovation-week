import { useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { day1, day2, day3 } from "./scheduleData";
import Table from "./Table";

const Schedule = () => {
  const data = useMemo(() => day1, []);
  const dataDay2 = useMemo(() => day2, []);
  const dataDay3 = useMemo(() => day3, []);
  const columns = useMemo(
    () => [
      {
        Header: "Event",
        accessor: "event",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Guests",
        accessor: "guests",
      },
      {
        Header: "Duration",
        accessor: "duration",
      },
      {
        Header: "Start",
        accessor: "start",
      },
      {
        Header: "End",
        accessor: "end",
      },
    ],
    [],
  );

  return (
    <div className="schedule">
      <Header />
      <h3 className="section-title u-marg-top-lg">Schedule</h3>
      <div className="table-container">
        <h3 style={{ textAlign: "center" }}>
          5<sup>th</sup> December 2023
        </h3>
        <Table columns={columns} data={data} />
      </div>
      <div className="table-container">
        <h3 style={{ textAlign: "center" }}>
          6<sup>th</sup> December 2023
        </h3>
        <Table columns={columns} data={dataDay2} />
      </div>
      <div className="table-container">
        <h3 style={{ textAlign: "center" }}>
          7<sup>th</sup> December 2023
        </h3>
        <Table columns={columns} data={dataDay3} />
      </div>
      <Footer />
    </div>
  );
};
export default Schedule;
