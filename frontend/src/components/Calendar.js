import React from "react";

function handleClick(event) {
  event.preventDefault();
  if (event.target.id === "false") event.target.id = "true";
  else event.target.id = "false";
}

function handleDrag(event) {
  event.preventDefault();
  if (event.buttons === 1) {
    if (event.target.id === "false") event.target.id = "true";
    else event.target.id = "false";
  }
}

export default function Calendar(props) {
  let noEarlier = Number(props.nE.substring(2, 6));
  let noLater = Number(props.nL.substring(2, 6));
  let totalHours = (noLater - noEarlier) / 100;
  let numTimeSegs = totalHours * 4;
  const rows = [];
  for (let i = 0; i < numTimeSegs; i++) {
    let inc = 0;
    if (i >= 4) {
      inc = Math.floor(i / 4) * 100;
      inc += (i % 4) * 15;
    } else {
      inc = i * 15;
    }
    if (i % 4 === 0) rows.push(tableRowHeader(inc + noEarlier, i));
    else rows.push(tableRow(inc + noEarlier, i));
  }

  return (
    <div className="calendar">
      <h3>{props.name}</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function tableRowHeader(time, index) {
  let stringy = "";
  if (time < 1000) {
    stringy = "0" + String(time);
  } else {
    stringy = String(time);
  }
  let timeStr = stringy.slice(0, 2) + ":" + stringy.slice(2, 4);
  return (
    <tr id={timeStr}>
      <th style={{userSelect: 'none'}}>{timeStr}</th>
      <td
        className="Sunday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Monday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Tuesday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Wednesday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Thursday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Friday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Saturday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
    </tr>
  );
}

function tableRow(time, index) {
  let stringy = "";
  if (time < 1000) {
    stringy = "0" + String(time);
  } else {
    stringy = String(time);
  }
  let timeStr = stringy.slice(0, 2) + ":" + stringy.slice(2, 4);
  return (
    <tr id={timeStr}>
      <th style={{userSelect: 'none', color: 'rgba(1, 1, 1, 0)'}}>{timeStr}</th>
      <td
        className="Sunday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Monday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Tuesday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Wednesday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Thursday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Friday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
      <td
        className="Saturday"
        id="false"
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleDrag(e)}
        onMouseOver={(e) => handleDrag(e)}
      >
        {" "}
      </td>
    </tr>
  );
}
