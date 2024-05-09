import { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

function Skills({ skillsCategories, setSkillsCategories }) {
  const [formValues, setFormValues] = useState({ ...skillsCategories });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSkillsCategories(formValues);
  };

  return (
    <div className="skills-container">
      <div className="form-title-container">
        <span className="form-section-title">Skills</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormGroup
          label="Category:"
          type="text"
          id="category"
          value={formValues.category || ''}
          onChange={handleChange}
          required={true}
        />
        <FormGroup
          label="Skills:"
          type="textarea"
          id="skills"
          value={formValues.skills || ''}
          onChange={handleChange}
          required={true}
        />
        <div className="button-container">
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

Skills.propTypes = {
  skillsCategories: PropTypes.shape({
    category: PropTypes.string,
    skills: PropTypes.string,
  }).isRequired,
  setSkillsCategories: PropTypes.func.isRequired,
};

export default Skills;
