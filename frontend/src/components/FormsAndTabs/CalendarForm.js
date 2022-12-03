import React from 'react'
import Calendar from '../Calendar'

export default function CalendarForm(props) {
  return (
    <div>
        <label htmlFor='name'>Your Name: </label>
        <input type={'text'} name={'name'} defaultValue={'Name'} />
        <input type={'submit'} />
        <Calendar name={props.name} nE={props.nE} nL={props.nL}/>
    </div>
  )
}
