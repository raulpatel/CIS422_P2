import React, {Component} from 'react'

class ContainerForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "Container",
      formValues: [{ name: "", items : "" }]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }
  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, {name:"", options:"" }]
    }))
  }
  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
    console.log(this.state.formValues);
  }
  

  render() {
    return (
    
    <div>
      <fieldset>
      <form onSubmit={ this.handleSubmit }>
      <input type="text" id='Poll_Name' placeholder="Container Name" value ={this.state.contName}
      onChange = {this.handleContChange}/>
      <br/>
      <br/>
      <label for={'guests'}>Guests Allowed?</label>
      <input name={'guests'} type={'checkbox'} disabled checked />
      <br/> <br/> 
      <label for={'test'}>Note: Container One is checked for consensus</label>
      <br/> <br/> 
      {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Container Name: </label>
              <input type="text" name="name" value={element.name || ""} onChange={e => this.handleChange(index, e)} />
              <br /> <br />
              <label>Items (Comma Seperated): </label>
              <input type="text" name="items" value={element.items || ""} onChange={e => this.handleChange(index, e)} />
              <br /> <br />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove Container</button> 
                : null
              }
              <br /> <br />
            </div>
          ))}
      <div className="button-section">
          <button className="button add" type="button" onClick={() => this.addFormFields()}>Add Container</button>
          <br /> <br />
          <button className="button submit" type="submit">Submit</button>
      </div>
      {/*
      <label for={'endTime'}>No Later Than: </label>
      <input name={'endTime'} type={'time'} step={'900'} min={'00:00'}  max={'24:00'} value={'22:00'}/>
      */}
      <br/>
      </form>
      </fieldset> 
    </div>
  );
}
}
export default ContainerForm;
