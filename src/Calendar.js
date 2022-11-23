import React from 'react'

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
    }
    else {
      inc = i * 15;
    }
    rows.push(tableRow(inc + noEarlier));
  }

  return (
    <div className='calendar'>
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
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

function tableRow(time) { 
  let stringy = '';
  if (time < 1000) {
    stringy = '0' + String(time);
  }
  else {
    stringy = String(time);
  }
  let timeStr = stringy.slice(0,2) + ':' + stringy.slice(2,4);
  const handleDragOver = event => {
    event.preventDefault();
    if (this.id === 'no')  this.id = 'yes';
    else this.id = 'no';
  }
  return (
    <tr id={timeStr}>
      <th>{timeStr}</th>
      <td id='no' onDragOver={handleDragOver}> </td>
      <td id='no' onDragOver={handleDragOver}> </td>
      <td id='no' onDragOver={handleDragOver}> </td>
      <td id='no' onDragOver={handleDragOver}> </td>
      <td id='no' onDragOver={handleDragOver}> </td>
      <td id='no' onDragOver={handleDragOver}> </td>
      <td id='no' onDragOver={handleDragOver}> </td>
    </tr> 
  );
}