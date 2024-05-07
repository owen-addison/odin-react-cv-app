import FormGroup from './FormGroup';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Experience({
  type,
  experienceDetails,
  setExperienceDetails,
  onRemove,
}) {
  const [formValues, setFormValues] = useState({
    ...experienceDetails,
    complete: experienceDetails.complete || false,
  });
  const [prevEndDate, setPrevEndDate] = useState(
    experienceDetails.endDate || '',
  );

  useEffect(() => {
    if (formValues.stillHere) {
      setFormValues((prevState) => ({
        ...prevState,
        endDate: new Date().toISOString().slice(0, 10),
      }));
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        endDate: prevEndDate,
      }));
    }
  }, [formValues.stillHere, prevEndDate]);

  const handleChange = (event) => {
    const { id, value, type } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: type === 'checkbox' ? event.target.checked : value,
    }));
    if (id === 'endDate') {
      setPrevEndDate(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues((prevState) => ({
      ...prevState,
      complete: true,
    }));
    setExperienceDetails(formValues);
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
          <FormGroup
            label="End Date:"
            type="date"
            id="endDate"
            value={
              formValues.stillHere
                ? new Date().toISOString().slice(0, 10)
                : formValues.endDate
            }
            onChange={handleChange}
            required={!formValues.stillHere}
            disabled={formValues.stillHere}
            className={formValues.stillHere ? 'disabled-input' : ''}
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
            <button type="remove" className="remove-button" onClick={onRemove}>
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
  experienceDetails: PropTypes.shape({
    institute: PropTypes.string,
    study: PropTypes.string,
    description: PropTypes.string,
    endDate: PropTypes.string,
    stillHere: PropTypes.bool,
  }).isRequired,
  setExperienceDetails: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Experience;
