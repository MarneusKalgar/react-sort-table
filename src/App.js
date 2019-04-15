import React, { Component } from "react";
import SortTable from "./SortTable/SortTable";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      openedOnly: false
    };

    this.doSort = this.doSort.bind(this);
  }

  doSort(event) {
    this.setState({
      openedOnly: event.target.checked
    })
  }

  componentDidMount() {
    fetch("/api/data.json")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          data: JSON.parse(JSON.stringify(myJson))
        });
      });
  }

  render() {
    return (
      <div className="App">
        <input
          name="openedOnly"
          type="checkbox"
          checked={this.state.openedOnly}
          onChange={this.doSort}
        />
        <SortTable items={this.state.data} openedOnly={this.state.openedOnly} />
      </div>
    );
  }
}

export default App;
