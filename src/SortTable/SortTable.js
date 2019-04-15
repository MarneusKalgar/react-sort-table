import React, { Component } from "react";

class SortTable extends Component {
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
          {
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
              });

              return (
                isOpened && openedOnly
                  ?
                  <tr key={item.instrumentID}>
                    <td>{item.instrumentID}</td>
                    <td>{item.name}</td>
                    <td>Open</td>
                  </tr>
                  :
                  <tr key={item.instrumentID}>
                    <td>{item.instrumentID}</td>
                    <td>{item.name}</td>
                    <td>{isOpened ? 'Open' : 'Close'}</td>
                  </tr>
              )

              //return (
              //    <tr key={item.instrumentID}>
              //    <td>{item.instrumentID}</td>
              //    <td>{item.name}</td>
              //    <td>{isOpened ? 'Open' : 'Close'}</td>
              //  </tr>
              //)
            })
          }
        </tbody>
      </table>
    );
  }
}

export default SortTable;
