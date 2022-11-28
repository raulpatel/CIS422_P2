import React, {Component} from 'react'
import Calendar from '../Calendar'


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

class ScheduleForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "Calendar",
      schedName: "",
      noEarlier: 'ne0800',
      noLater: 'nl1700'
    };
    this.handleSchedChange = this.handleSchedChange.bind(this);
    this.handleNoEarlierChange = this.handleNoEarlierChange.bind(this);
    this.handleNoLaterChange = this.handleNoLaterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSchedChange(event) {
    this.setState({schedName: event.target.value});
  }
  handleNoEarlierChange(event) {
    this.setState({noEarlier: event.target.value});
  }
  handleNoLaterChange(event) {
    this.setState({noLater: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
    console.log(this.state.schedName);
    console.log(this.state.noEarlier);
    console.log(this.state.noLater);
  }
  

  render() {
    return (
    
    <div>
      <fieldset>
      <form onSubmit={ this.handleSubmit }>
      <input type="text" id='Sched_Name' placeholder="Schedule Name" value ={this.state.schedName}
      onChange = {this.handleSchedChange}/>
      <br/>
      <br/>
      <label for={'guests'}>Guests Allowed?</label>
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
      value ={this.state.noEarlier}
      onChange={this.handleNoEarlierChange}
      />
      </div>
      <br/>
      <div>
      <Dropdown
      label = "No Later Than: "
      options = {[
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
      value ={this.state.noLater}
      onChange={this.handleNoLaterChange}
      />
      </div>
      {/*
      <label for={'endTime'}>No Later Than: </label>
      <input name={'endTime'} type={'time'} step={'900'} min={'00:00'}  max={'24:00'} value={'22:00'}/>
      */}
      <br/>
      <button type='submit'>Submit</button>
      </form>
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
      <Calendar nE={noEarlier} nL={noLater}/>
    </div>
  );
}
}
export default ScheduleForm;
