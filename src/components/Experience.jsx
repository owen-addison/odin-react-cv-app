import FormGroup from './FormGroup';
import PropTypes from 'prop-types';

function Experience({ type }) {
  let formGroups;

  switch (type) {
    case 'Educational':
      formGroups = (
        <>
          <FormGroup label="Institute:" type="text" id="institute" />
          <FormGroup label="Area of study:" type="text" id="study" />
          {/* Add more form groups for educational experience */}
        </>
      );
      break;
    case 'Professional':
      formGroups = (
        <>
          <FormGroup label="Company:" type="text" id="company" />
          <FormGroup label="Position:" type="text" id="position" />
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
