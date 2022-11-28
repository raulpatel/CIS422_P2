import React, {useState} from 'react'
import Calendar from './Calendar'


export default function CreatePollForm() {
  return (
    <div>
      <input type={'text'} defaultValue={'Schedule Name'} />
      <br/>
      <label for={'guests'}>Guests Allowed?</label>
      <input name={'guests'} type={'checkbox'}/>
      <br/>
      <label for={'specifyDate'}>Specify Dates?</label>
      <button name={'specifyDate'} on/>
      <br/>
      <div id={'dates'} style={{display:'none'}}>
        <label for={'startDate'}>Start Date</label>
        <input name={'startDate'} type={'date'}/>
        <br/>
        <label for={'endDate'}>End Date</label>
        <input name={'endDate'} type={'date'}/>
      </div>
      <br/>
      <label for={'startTime'}>Start Time</label>
      <input name={'startTime'} type={'time'} step={'900'} min={'00:00'}  max={'24:00'} value={"08:00"}/>
      <br/>
      <label for={'endTime'}>End Time</label>
      <input name={'endTime'} type={'time'} step={'900'} min={'00:00'}  max={'24:00'} value={'22:00'}/>
      <br/>
      <input type={'submit'}/>
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
      <Calendar />
    </div>
  )
}
