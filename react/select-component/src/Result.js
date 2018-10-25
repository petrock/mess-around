import React from 'react';

class Result extends React.Component {
  calculateTotalUtility () {
    var utilityValues = Object.values(this.props.results);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return Number( parseFloat( utilityValues.reduce(reducer).toFixed(1) ) );
  }

  calculatePercentage ( totalUtility ) {
    var percentage = Math.exp( totalUtility )/( Math.exp( totalUtility ) + Math.exp( -0.5 ));
    return percentage.toFixed(2)*100;
  }

  render() {
    var totalUtility = this.calculateTotalUtility();
    var participationPercentage = this.calculatePercentage( totalUtility );

    return (
      <div>
        <div> GI Involvement  {this.props.results.giInvolvement}</div>
        <div> Placebo  {this.props.results.placebo}</div>
        <div> Procedures  {this.props.results.procedures}</div>
        <div> Time  {this.props.results.time}</div>
        <div> Open label  {this.props.results.openLabel}</div>
        <div> Money  {this.props.results.money}</div>
        <div>Total Utility: {totalUtility}  </div>
        <div>Participation Percentage: {participationPercentage}  </div>
      </div>
    );
  }
}

export default Result
