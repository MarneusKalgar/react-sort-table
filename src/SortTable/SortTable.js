import React, { Component } from "react";

class SortTable extends Component {
  constructor(props) {
    super(props);

    this.sortArr = this.sortArr.bind(this);
  }

  sortArr() {
    const { items, openedOnly } = this.props;

    return (
      items.map(item => {
        let isOpened = null;
        let nowDate = new Date();

        item.tradingHours.forEach(itm => {
          //console.log(item.instrumentID, new Date(itm.from), new Date(itm.to))
          if (itm.from > nowDate && nowDate <= itm.to) {
            isOpened = true
          } else {
            isOpened = false
          }
        })

        // if sort checkbox isn't checked
        if (!openedOnly) {
          return (
            <tr key={item.instrumentID}>
              <td>{item.instrumentID}</td>
              <td>{item.name}</td>
              <td>{isOpened ? 'Open' : 'Close'}</td>
            </tr>
          );
        }

        // if sort checkbox isn checked and current item is opened
        if (openedOnly && isOpened) {
          return (
            <tr key={item.instrumentID}>
              <td>{item.instrumentID}</td>
              <td>{item.name}</td>
              <td>Open</td>
            </tr>
          );
        }
      })
    )
  }

  render() {
    const { items, openedOnly } = this.props;
    console.log(openedOnly)
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>isOpened</th>
          </tr>
        </thead>
        <tbody>
          {this.sortArr()}
        </tbody>
      </table>
    );
  }
}

export default SortTable;
