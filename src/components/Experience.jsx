import FormGroup from './FormGroup';
import ButtonContainer from './ButtonContainer';
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
    setExperienceDetails({
      ...formValues,
      complete: true,
    });
  };

  const getFormGroups = () => {
    const commonFormGroups = (
      <>
        <div className="dates-container flex flex-col">
          <FormGroup
            label="Start Date:"
            type="date"
            id="startDate"
            value={formValues.startDate}
            onChange={handleChange}
            required={true}
            placeholder={experienceDetails.startDate}
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
            placeholder={experienceDetails.endDate}
          />
          <FormGroup
            label="Still Here:"
            type="checkbox"
            id="stillHere"
            checked={formValues.stillHere}
            onChange={handleChange}
            className={'self-center'}
            placeholder={experienceDetails.stillHere}
          />
        </div>
        <FormGroup
          label="Details:"
          type="textarea"
          id="description"
          value={formValues.description}
          className="details"
          onChange={handleChange}
          required={true}
          placeholder={experienceDetails.description}
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
              placeholder={experienceDetails.institute}
            />
            <FormGroup
              label="Subject:"
              type="text"
              id="study"
              value={formValues.study}
              onChange={handleChange}
              required={true}
              placeholder={experienceDetails.study}
            />
            <FormGroup
              label="Grade:"
              type="text"
              id="grade"
              value={formValues.grade}
              onChange={handleChange}
              required={true}
              placeholder={experienceDetails.grade}
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
              placeholder={experienceDetails.company}
            />
            <FormGroup
              label="Position:"
              type="text"
              id="position"
              value={formValues.position}
              onChange={handleChange}
              required={true}
              placeholder={experienceDetails.position}
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
        className="flex flex-col justify-start content-start"
        onSubmit={handleSubmit}
      >
        <div className="experience-section flex flex-col justify-start content-start">
          {getFormGroups()}
        </div>
        <ButtonContainer onRemove={onRemove} onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

Experience.propTypes = {
  type: PropTypes.string.isRequired,
  experienceDetails: PropTypes.shape({
    institute: PropTypes.string,
    company: PropTypes.string,
    study: PropTypes.string,
    position: PropTypes.string,
    grade: PropTypes.string,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    stillHere: PropTypes.bool,
    complete: PropTypes.bool,
  }).isRequired,
  setExperienceDetails: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Experience;
