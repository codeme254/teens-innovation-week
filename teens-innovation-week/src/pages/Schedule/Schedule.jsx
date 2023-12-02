import { useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { day1 } from "./scheduleData";
import { useTable } from "react-table";

const Schedule = () => {
  const data = useMemo(() => day1, []);
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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="schedule">
      <Header />
      <h3 className="section-title u-marg-top-lg">Schedule</h3>
      <div className="table-container">
        <h3 style={{ textAlign: "center" }}>Day 1</h3>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
export default Schedule;
