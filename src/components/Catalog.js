import React, { Component } from 'react';

import './catalogStyle.css';

import ListOfItems from './ListOfItems';
import TableOfItems from './TableOfItems';

class Catalog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tableView: false
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    this.setState(prevState => ({
        tableView: !prevState.tableView
      })
    );
  }

  render() {
    return (
      this.state.tableView ?
      <div className="noSelect">
        <button className="btn" onClick={this.changeView}>Change View</button>
        <TableOfItems />
      </div> :
      <div className="noSelect">
        <button className="btn" onClick={this.changeView}>Change View</button>
        <ListOfItems />
      </div>
    )
  }
}

export default Catalog;
