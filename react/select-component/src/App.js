import React, { Component } from 'react';
import Select from './Select';
import Result from './Result';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props );
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      giInvolvement: 0.5,
      placebo: 0.3,
      procedures: 0.3,
      time: 0.2,
      openLabel: 0.5,
      money: -0.8
    };
  }

  handleSelectChange( name, value ) {
    this.setState(
      { 
        [name]: Number( parseFloat(value).toFixed(1) )
      }
    );
  }

  render() {
    const selectConfig = {
      giInvolvement: 
        { 
          name: 'giInvolvement',
          label: 'GI Involvement',
          defaultOption : 0.5,
          options: [
            {
              id: 1,
              label: 'They are conducting the trial',
              value: 0.5,
            },
            {
              id: 2,
              label: 'They are not conducting the trial, but they are getting reports of every trial visit',
              value: 0.3,
            },
            {
              id: 3,
              label: 'They are not involved at all in the trial.',
              value: -0.8,
            }
          ]
        },
      placebo: 
        { 
          name: 'placebo',
          label: 'Number of participants receiving a placebo',
          defaultOption : 0.3,
          options: [
            {
              id: 1,
              label: '2 out of 10 participants will receive placebo',
              value: 0.5,
            },
            {
              id: 2,
              label: '3 out of 10 participants will receive placebo',
              value: 0.3,
            },
            {
              id: 3,
              label: '5 out of 10 participants will receive placebo',
              value: -0.8,
            }
          ]
        },
      procedures: 
        { 
          name: 'procedures',
          label: 'Number of procedures per year',
          defaultOption : 0.3,
          options: [
            {
              id: 1,
              label: '2 procedure per year',
              value: 0.5,
            },
            {
              id: 2,
              label: '3 procedures per year',
              value: 0.3,
            },
            {
              id: 3,
              label: '4 procedures per year',
              value: -0.8,
            }
          ]
        },
      time: 
        { 
          name: 'time',
          label: 'Time (hours per month)',
          defaultOption : 0.2,
          options: [
            {
              id: 1,
              label: '3 hours per month',
              value: 0.5,
            },
            {
              id: 2,
              label: '6 hours per month',
              value: 0.2,
            },
            {
              id: 3,
              label: '12 hours per month',
              value: 0.1,
            },
            {
              id: 4,
              label: '24 hours per month ',
              value: -0.8,
            }
          ]
        },
      openLabel: 
        { 
          name: 'openLabel',
          label: 'Open Label?',
          defaultOption : 0.5,
          options: [
            {
              id: 1,
              label: 'Yes',
              value: 0.5,
            },
            {
              id: 2,
              label: 'No',
              value: -0.5,
            }
          ]
        },
      money: 
        { 
          name: 'money',
          label: 'Money',
          defaultOption : -0.8,
          options: [
            {
              id: 1,
              label: '$0 over life of trial',
              value: -0.8,
            },
            {
              id: 2,
              label: '$300 over life of trial ',
              value: 0.1,
            },
            {
              id: 3,
              label: '$750 over life of trial',
              value: 0.2,
            },
            {
              id: 4,
              label: '$2,000 over life of trial',
              value: 0.5,
            }
          ]
        }
    };

    return (
      <div className="App">
        <Select 
          config={ selectConfig.giInvolvement }
          onSelectChange={this.handleSelectChange} />

        <Select 
          config={ selectConfig.placebo }
          onSelectChange={this.handleSelectChange }/>

        <Select 
          config={ selectConfig.procedures }
          onSelectChange={this.handleSelectChange }/>

        <Select 
          config={ selectConfig.time }
          onSelectChange={this.handleSelectChange }/>

        <Select 
          config={ selectConfig.openLabel }
          onSelectChange={this.handleSelectChange }/>

        <Select 
          config={ selectConfig.money }
          onSelectChange={this.handleSelectChange }/>

        <Result results={this.state} />
      </div>
    );
  }
}

export default App;
