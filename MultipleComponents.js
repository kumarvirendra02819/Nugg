import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KeyboardMouseActivity from './KeyboardMouseActivity';
import TimeTracked from './TimeTracked';

class Dashboard extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="page-content-wrapper ">
        <div className="containernew">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <KeyboardMouseActivity />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <TimeTracked />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;