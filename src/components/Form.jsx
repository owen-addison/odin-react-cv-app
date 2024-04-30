import Personal from './Personal';
import Educational from './Educational';
import PropTypes from 'prop-types';

function Form({ personalDetails, setPersonalDetails }) {
  // Function to update personal details when the form is submitted
  const handlePersonalDetailsSubmit = (newDetails) => {
    setPersonalDetails(newDetails);
  };

  return (
    <>
      <div className="form-container w-96 flex flex-col content-start">
        <Personal
          personalDetails={personalDetails}
          setPersonalDetails={handlePersonalDetailsSubmit}
        />
        <Educational />
      </div>
    </>
  );
}

Form.propTypes = {
  personalDetails: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    website: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  setPersonalDetails: PropTypes.func.isRequired,
};

export default Form;
