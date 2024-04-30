import FormGroup from './FormGroup';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Experience({ type, educationDetails, setEducationDetails }) {
  const [formValues, setFormValues] = useState({ ...educationDetails });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEducationDetails(formValues);
  };

  let formGroups;

  switch (type) {
    case 'Educational':
      formGroups = (
        <>
          <FormGroup
            label="Institute:"
            type="text"
            id="institute"
            value={formValues.institute}
            onChange={handleChange}
            required={true}
          />
          <FormGroup
            label="Area of Study:"
            type="text"
            id="study"
            value={formValues.study}
            onChange={handleChange}
            required={true}
          />
          <div className="dates-container flex gap-4">
            <FormGroup
              label="Start Date:"
              type="date"
              id="startDate"
              value={formValues.startDate}
              onChange={handleChange}
              required={true}
            />
            <FormGroup
              label="End Date:"
              type="date"
              id="endDate"
              value={formValues.endDate}
              onChange={handleChange}
              required={!formValues.stillHere}
              disabled={formValues.stillHere}
            />
            <FormGroup
              label="Still Here:"
              type="checkbox"
              id="stillHere"
              checked={formValues.stillHere}
              onChange={handleChange}
            />
          </div>
          <FormGroup
            label="Description:"
            type="text"
            id="description"
            value={formValues.description}
            onChange={handleChange}
            required={true}
          />
        </>
      );
      break;
    case 'Professional':
      formGroups = (
        <>
          <FormGroup
            label="Company:"
            type="text"
            id="company"
            value={formValues.company}
            onChange={handleChange}
            required={true}
          />
          <FormGroup
            label="Position:"
            type="text"
            id="position"
            value={formValues.position}
            onChange={handleChange}
            required={true}
          />
          <div className="dates-container flex gap-4">
            <FormGroup
              label="Start Date:"
              type="date"
              id="startDate"
              value={formValues.startDate}
              onChange={handleChange}
              required={true}
            />
            <FormGroup
              label="End Date:"
              type="date"
              id="endDate"
              value={formValues.endDate}
              onChange={handleChange}
              required={!formValues.stillHere}
              disabled={formValues.stillHere}
            />
            <FormGroup
              label="Still Here:"
              type="checkbox"
              id="stillHere"
              checked={formValues.stillHere}
              onChange={handleChange}
            />
          </div>
          <FormGroup
            label="Description:"
            type="text"
            id="description"
            value={formValues.description}
            onChange={handleChange}
            required={true}
          />
        </>
      );
      break;
    default:
      formGroups = <div>Invalid type: {type}</div>;
      break;
  }

  return (
    <div className="experience-container">
      <form
        className="flex flex-col justify-start gap-2 content-start"
        onSubmit={handleSubmit}
      >
        <div className="experience-section flex flex-row justify-start gap-2 content-center">
          {formGroups}
        </div>
        <div className="submit-container flex flex-row justify-start my-2">
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </div>
        <div className="remove-container flex flex-row justify-start my-2">
          <button type="remove" className="remove-button">
            REMOVE
          </button>
        </div>
      </form>
    </div>
  );
}

Experience.propTypes = {
  type: PropTypes.string.isRequired,
  educationDetails: PropTypes.shape({
    institute: PropTypes.string,
    study: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setEducationDetails: PropTypes.func.isRequired,
};

export default Experience;
