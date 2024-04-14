import FormGroup from './FormGroup';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Personal({ personalDetails, setPersonalDetails }) {
  const [formValues, setFormValues] = useState({ ...personalDetails });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersonalDetails(formValues);
  };

  return (
    <>
      <div className="personal-container">
        <form
          className="flex flex-col justify-start gap-2 content-start"
          onSubmit={handleSubmit}
        >
          <FormGroup
            label="Name:"
            type="text"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            required={true}
          />
          <FormGroup
            label="Email:"
            type="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            required={true}
          />
          <FormGroup
            label="Number:"
            type="tel"
            id="telephone"
            value={formValues.telephone}
            pattern="[0-9]+"
            onChange={handleChange}
            required={true}
          />
          <FormGroup
            label="Website:"
            type="text"
            id="website"
            value={formValues.website}
            pattern=".*\.(com|net|org|info|biz|name|io|tech|co|website|digital|online|us|ca|uk|au|de|fr|it|es|jp|cn|in)$"
            onChange={handleChange}
            required={true}
          />
          <FormGroup
            label="About:"
            type="textarea"
            id="about"
            value={formValues.about}
            onChange={handleChange}
            required={true}
          />

          <div className="submit-container flex flex-row justify-start my-2">
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

Personal.propTypes = {
  personalDetails: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    website: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  setPersonalDetails: PropTypes.func.isRequired,
};

export default Personal;
