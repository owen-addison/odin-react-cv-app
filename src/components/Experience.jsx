import FormGroup from './FormGroup';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Experience({ type, educationDetails, setEducationDetails }) {
  const [formValues, setFormValues] = useState({ ...educationDetails });

  const handleChange = (event) => {
    const { id, value, type } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: type === 'checkbox' ? event.target.checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEducationDetails(formValues);
  };

  const getFormGroups = () => {
    const commonFormGroups = (
      <>
        <div className="dates-container flex flex-col gap-4">
          <FormGroup
            label="Start Date:"
            type="date"
            id="startDate"
            value={formValues.startDate}
            onChange={handleChange}
            required={true}
          />
          {formValues.stillHere ? null : (
            <FormGroup
              label="End Date:"
              type="date"
              id="endDate"
              value={formValues.endDate}
              onChange={handleChange}
              required={!formValues.stillHere}
              disabled={formValues.stillHere}
            />
          )}
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

    switch (type) {
      case 'Educational':
        return (
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
            {commonFormGroups}
          </>
        );
      case 'Professional':
        return (
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
            {commonFormGroups}
          </>
        );
      default:
        return <div>Invalid type: {type}</div>;
    }
  };

  return (
    <div className="experience-container">
      <form
        className="flex flex-col justify-start gap-2 content-start"
        onSubmit={handleSubmit}
      >
        <div className="experience-section flex flex-col justify-start gap-2 content-start">
          {getFormGroups()}
        </div>
        <div className="button-container flex flex-row gap-4 justify-end">
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
