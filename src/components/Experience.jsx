import FormGroup from './FormGroup';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Experience({ type }) {
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [id]: value }));
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
            label="Area of study:"
            type="text"
            id="study"
            value={formValues.study}
            onChange={handleChange}
            required={true}
          />
          {/* Add more form groups for educational experience */}
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
          {/* Add more form groups for professional experience */}
        </>
      );
      break;
    default:
      formGroups = <div>Invalid type: {type}</div>;
      break;
  }

  return <div className="experience-section flex flex-row">{formGroups}</div>;
}

Experience.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Experience;
