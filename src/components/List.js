import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";

export default class List extends Component {
  state = {
    employee: [
      { name: "Alex", dep: "Tech", available: true },
      { name: "Bea", dep: "Project managment", available: true },
      { name: "Carl", dep: "HR", available: true },
      {
        name: "Dasha",
        dep: "Backend dev team",
        available: true
      },
      {
        name: "Eric",
        dep: "Business development",
        available: true
      },
      {
        name: "Francesca",
        dep: "Frontend dev team",
        available: true
      },
      {
        name: "Gabriella",
        dep: "Online marketing",
        available: true
      }
    ],
    toggle: "Available"
  };

  render() {
    let arr = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    let arr2 = arr
      .slice(arr.indexOf(Date().substring(0, 3)))
      .concat(arr.slice(0, arr.indexOf(Date().substring(0, 3))));
      
    let available = this.state.employee.filter(x => x.available === true);
    let final = available
      .concat(available)
      .concat(available)
      .concat(available)
      .concat(available)
      .concat(available)
      .concat(available)
      .concat(available)
      .concat(available)
      .concat(available)
      .concat(available);

    return (
      <div style={{ padding: "100px", display: "grid", placeItems: "center" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "100px" }}>Day</th>
              <th style={{ width: "200px" }}>Open</th>
              <th style={{ width: "200px" }}>Close</th>
            </tr>
          </thead>
          <tbody>
            {available.length === 0 ? (
              <td colSpan="3" style={{height: '245px', paddingTop: '120px'}}>No one is available!</td>
            ) : (
              <Fragment>
                <tr>
                  <td style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "10px",
                        padding: "0 4px",
                        color: "#fff",
                        backgroundColor: "red"
                      }}
                    >
                      Today
                    </div>
                    {arr2[0]}
                  </td>
                  <td>
                    {final[0].name} / {final[0].dep}
                  </td>
                  <td>
                    {final[1].name} / {final[1].dep}
                  </td>
                </tr>

                <tr>
                  <td>{arr2[1]}</td>
                  <td>
                    {final[2].name} / {final[2].dep}
                  </td>
                  <td>
                    {final[3].name} / {final[3].dep}
                  </td>
                </tr>

                <tr>
                  <td>{arr2[2]}</td>
                  <td>
                    {final[4].name} / {final[4].dep}
                  </td>
                  <td>
                    {final[5].name} / {final[5].dep}
                  </td>
                </tr>
                <tr>
                  <td>{arr2[3]}</td>
                  <td>
                    {final[6].name} / {final[6].dep}
                  </td>
                  <td>
                    {final[7].name} / {final[7].dep}
                  </td>
                </tr>
                <tr>
                  <td>{arr2[4]}</td>
                  <td>
                    {final[8].name} / {final[8].dep}
                  </td>
                  <td>
                    {final[9].name} / {final[9].dep}
                  </td>
                </tr>
              </Fragment>
            )}
          </tbody>
        </Table>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            margin: "30px"
          }}
        >
          {this.state.employee.map(x => (
            <div
              key={Math.random()}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ width: "100px" }}>{x.name}</div>
              <button
                style={{
                  color: "#fff",
                  borderRadius: "8px",
                  backgroundColor: x.available ? "green" : "red"
                }}
                onClick={() => {
                  this.setState(prev => {
                    let employee = [...prev.employee];
                    let theOne = employee.find(y => y.name === x.name);
                    theOne.available = !theOne.available;
                    return {
                      employee: employee.map(z =>
                        z.name === theOne.name ? theOne : z
                      )
                    };
                  });
                }}
              >
                {x.available ? "Available" : "Not Available"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
