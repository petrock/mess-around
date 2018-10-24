import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.results.giInvolvement}</div>
        <div>{this.props.results.placebo}</div>
        <div>{this.props.results.procedures}</div>
        <div>{this.props.results.time}</div>
        <div>{this.props.results.openLabel}</div>
        <div>{this.props.results.money}</div>
        <div>Total Utility:  </div>
      </div>
    );
  }
}

export default Result
