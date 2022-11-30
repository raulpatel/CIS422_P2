import React, {useState} from 'react'
import CalendarForm from '../CalendarForm';

const API = "https://127.0.0.1:5000";

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
        <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
 };

export default function ScheduleForm() {
  const [noEarlier, setNoEarlier] = React.useState('ne0800');

  const [noLater, setNoLater] = React.useState('nl1700');

  const [scheduleName, setScheduleName] = React.useState('');

  const [isShown, setIsShown] = React.useState(false);

  const handleNoEarlierChange = (event) => {

    setNoEarlier(event.target.value);


  }

  const handleNoLaterChange = (event) => {

    setNoLater(event.target.value);


  }

  const handleScheduleNameChange = (event) => {

    setScheduleName(event.target.value);

  }

  const handleIsShown = (event) => {

    setIsShown(!isShown);

  }

  let json_data = {
    'p_name': scheduleName,
    'p_pw': "",
    'allow_guest': true,
    'date_start': "",
    'date_end': "",
    'index_start': (parseInt(noEarlier.substring(2,4)) * 4),
    'index_end': (parseInt(noLater.substring(2,4)) * 4),
    'containers': [],
    'questions': [],
    // 'current-date': "",
    // 'members': [],
    // 'time': [],
  };

  let poll_id = '';

  const submitHandler = async(event, scheduleName, guests, noEarlier, noLater) => {
    event.preventDefault();
    let result = await fetch(API + "/createpoll", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(json_data),
    })
    console.log(result);
    /*.then(
      response =>{
        console.log(response.data);
      }
    )
    
    .then(async(response) => {
      await response.data;
    })
    .finally((data) => {
      poll_id = data;
      console.log(`Poll created with ID: ${poll_id}`);
    })
    .catch((error) => {
      console.error('Error: Poll creation failed')
    });*/
  }

  return (
    
    <div>
      <fieldset>
      <input type="text" placeholder="Schedule Name" value={scheduleName} onChange={handleScheduleNameChange}/>
      <br/>
      <br/>
      <label htmlFor={'guests'}>Guests Allowed?</label>
      <input name={'guests'} type={'checkbox'} disabled checked />
      <br/>
      <br/>
      {/*
      <label for={'specifyDate'}>Specify Dates?</label>
      <input name={'specifyDate'} type={'checkbox'} on/>
      <br/>
      <div id={'dates'} style={{display:'none'}}>
        <label for={'startDate'}>Start Date</label>
        <input name={'startDate'} type={'date'}/>
        <br/>
        <label for={'endDate'}>End Date</label>
        <input name={'endDate'} type={'date'}/>
      </div>
      <br/>
      */}
      {/* <input name={'startTime'} type={'time'} step={'900'} min={'00:00'}  max={'24:00'} value={"08:00"}/> */}
      <div>
      <Dropdown
      label = "No Earlier Than: "
      options = {[
        { label: '12:00am',  value: 'ne0000' },
        { label: '01:00am',  value: 'ne0100' },
        { label: '02:00am',  value: 'ne0200' },
        { label: '03:00am',  value: 'ne0300' },
        { label: '04:00am',  value: 'ne0400' },
        { label: '05:00am',  value: 'ne0500' },
        { label: '06:00am',  value: 'ne0600' },
        { label: '07:00am',  value: 'ne0700' },
        { label: '08:00am',  value: 'ne0800' },
        { label: '09:00am',  value: 'ne0900' },
        { label: '10:00am',  value: 'ne1000' },
        { label: '11:00am',  value: 'ne1100' },
        { label: '12:00pm',  value: 'ne1200' },
        { label: '01:00pm',  value: 'ne1300' },
        { label: '02:00pm',  value: 'ne1400' },
        { label: '03:00pm',  value: 'ne1500' },
        { label: '04:00pm',  value: 'ne1600' },
        { label: '05:00pm',  value: 'ne1700' },
        { label: '06:00pm',  value: 'ne1800' },
        { label: '07:00pm',  value: 'ne1900' },
        { label: '08:00pm',  value: 'ne2000' },
        { label: '09:00pm',  value: 'ne2100' },
        { label: '10:00pm',  value: 'ne2200' },
        { label: '11:00pm',  value: 'ne2300' },
      ]}
      value ={noEarlier}
      onChange={handleNoEarlierChange}
      />
      </div>
      <br/>
      <div>
      <Dropdown
      label = "No Later Than: "
      options = {[
        { label: '12:00am',  value: 'nl0000' },
        { label: '01:00am',  value: 'nl0100' },
        { label: '02:00am',  value: 'nl0200' },
        { label: '03:00am',  value: 'nl0300' },
        { label: '04:00am',  value: 'nl0400' },
        { label: '05:00am',  value: 'nl0500' },
        { label: '06:00am',  value: 'nl0600' },
        { label: '07:00am',  value: 'nl0700' },
        { label: '08:00am',  value: 'nl0800' },
        { label: '09:00am',  value: 'nl0900' },
        { label: '10:00am',  value: 'nl1000' },
        { label: '11:00am',  value: 'nl1100' },
        { label: '12:00pm',  value: 'nl1200' },
        { label: '01:00pm',  value: 'nl1300' },
        { label: '02:00pm',  value: 'nl1400' },
        { label: '03:00pm',  value: 'nl1500' },
        { label: '04:00pm',  value: 'nl1600' },
        { label: '05:00pm',  value: 'nl1700' },
        { label: '06:00pm',  value: 'nl1800' },
        { label: '07:00pm',  value: 'nl1900' },
        { label: '08:00pm',  value: 'nl2000' },
        { label: '09:00pm',  value: 'nl2100' },
        { label: '10:00pm',  value: 'nl2200' },
        { label: '11:00pm',  value: 'nl2300' },
      ]}
      value ={noLater}
      onChange={handleNoLaterChange}
      />
      </div>
      {/*
      <label for={'endTime'}>No Later Than: </label>
      <input name={'endTime'} type={'time'} step={'900'} min={'00:00'}  max={'24:00'} value={'22:00'}/>
      */}
      <br/>
      { <input type={'submit'} onClick={submitHandler}/> }
      </fieldset>
      {/* <div id={'daySelector'} >
        <ul onClick={openSelector()}>Which Days?</ul>
        <ul className={'days'}><input id={'sunday'} type={'checkbox'} />Sunday</ul>
        <ul className={'days'}><input id={'monday'} type={'checkbox'} />Monday</ul>
        <ul className={'days'}><input id={'tuesday'} type={'checkbox'} />Tuesday</ul>
        <ul className={'days'}><input id={'wednesday'} type={'checkbox'} />Wednesday</ul>
        <ul className={'days'}><input id={'thursday'} type={'checkbox'} />Thursday</ul>
        <ul className={'days'}><input id={'friday'} type={'checkbox'} />Friday</ul>
        <ul className={'days'}><input id={'saturday'} type={'checkbox'} />Saturday</ul>
      </div> */}
      <CalendarForm name={scheduleName} nE={noEarlier} nL={noLater}/>
    </div>
  )
}
