import React, {Component} from 'react'
import Calendar from '../Calendar'
import ScheduleForm from './ScheduleForm';
import PollForm from './PollForm';
import ContainerForm from './ContainerForm';

class CreateTabRadio extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "Calendar"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  renderSelectedForm(param) {
    switch(param) {
      case 'Calendar':
        return <form name="Calendar" id="Calendar" >
              <ScheduleForm />
              </form>;
      case 'Poll':
        return <form name="Poll" id="Poll" >
              <PollForm />
              </form>;
      case 'Containers':
        return <form name="Containers" id="Containers" >
              <ContainerForm />
              </form>;
      default:
        return null;
    }
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Calendar"
              checked={this.state.selectedOption === "Calendar"}
              onChange={this.onValueChange}
            />
            Schedule
          </label> 
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Poll"
              checked={this.state.selectedOption === "Poll"}
              onChange={this.onValueChange}
            />
            Poll
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Containers"
              checked={this.state.selectedOption === "Containers"}
              onChange={this.onValueChange}
            />
            Containers
          </label>
        </div>
      {this.renderSelectedForm(this.state.selectedOption)}
      </form>
    );
  }
}

export default CreateTabRadio;
