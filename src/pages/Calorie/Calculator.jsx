import React, { Component } from 'react';
import SingleInput from './SingleInput';
import Select from './Select';
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup';
import Result from './Result';
import CalorieChart from './CalorieChart';

export default class Calculator extends Component {
  renderResult() {
    if (this.props.intState) {
      return <Result {...this.props} />;
    }
  }

  render() {
    return (
      <div className="calculator flex flex-col lg:flex-row p-4 lg:p-8 space-y-4 lg:space-x-8 items-center justify-center lg:justify-between bg-gray-100 rounded-lg shadow-md w-[70rem] ml-[13rem]">
        <form onSubmit={this.props.handleSubmit} className="flex flex-col space-y-4  lg:w-2/3 w-full ">

          <SingleInput
            title="Age"
            name="age"
            inputType="text"
            content={this.props.age}
            controlFunc={this.props.handleChange}
            placeholder="Age"
            required={true}
            className="p-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <div className="space-x-4">
            <button
              href="#"
              onClick={this.props.handleHeightToggle}
              disabled={!this.props.feetRow}
              className={`p-2 border rounded ${this.props.feetRow ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            >
              Cm
            </button>
            <button
              href="#"
              onClick={this.props.handleHeightToggle}
              disabled={!this.props.cm}
              className={`p-2 border rounded ${this.props.cm ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            >
              Feet
            </button>
          </div>

          {this.props.cm && (
            <SingleInput
              title="Height (cm)"
              name="height"
              inputType="text"
              content={this.props.height}
              controlFunc={this.props.handleChange}
              placeholder="Height"
              required={true}
              className="p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          )}

          {this.props.feetRow && (
            <div className="space-y-2">
              <SingleInput
                title="Height (feet)"
                name="feet"
                inputType="text"
                content={this.props.feet}
                controlFunc={this.props.handleChange}
                placeholder="Feet"
                required={true}
                className="p-2 border rounded focus:outline-none focus:border-blue-500"
              />

              <SingleInput
                title="Height (inches)"
                name="inches"
                inputType="text"
                content={this.props.inches}
                controlFunc={this.props.handleChange}
                placeholder="Inches"
                required={true}
                className="p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          )
          }

          <div className="space-x-4">
            <button
              href="#"
              onClick={this.props.handleWeightToggle}
              disabled={!this.props.lbs}
              className={`p-2 border rounded ${this.props.lbs ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            >
              Kg
            </button>
            <button
              href="#"
              onClick={this.props.handleWeightToggle}
              disabled={!this.props.kg}
              className={`p-2 border rounded ${this.props.kg ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
            >
              Lbs
            </button>
          </div>

          {this.props.kg && (
            <SingleInput
              title="Weight (kg)"
              name="weight"
              inputType="text"
              content={this.props.weight}
              controlFunc={this.props.handleChange}
              placeholder="Weight kg"
              required={true}
              className="p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          )}

          {this.props.lbs && (
            <SingleInput
              title="Weight (lbs)"
              name="weight"
              inputType="text"
              content={this.props.weight}
              controlFunc={this.props.handleChange}
              placeholder="Weight lbs"
              className="p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          )}

          <CheckboxOrRadioGroup
            title="Gender:"
            setName="gender"
            type="radio"
            controlFunc={this.props.handleChange}
            options={this.props.genderSelections}
            selectedOptions={this.props.gender}
          />

          <Select
            title="Activity Level"
            name="activityLevel"
            placeholder="Choose your activity level"
            controlFunc={this.props.handleChange}
            options={this.props.activityLevelOptions}
            className="p-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <CheckboxOrRadioGroup
            title="Goal:"
            setName="goal"
            type="radio"
            controlFunc={this.props.handleChange}
            options={this.props.goalSelections}
            selectedOptions={this.props.goal}
          />

          <button
            type="submit"
            className="p-2 border rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:border-blue-500 w-min"
          >
            Submit
          </button>

          <CalorieChart
            
            protein={this.props.protein}
            carbs={this.props.carbs}
            fat={this.props.fat}
          />

        </form>

        {this.renderResult()}
      </div>
    );
  }
}
