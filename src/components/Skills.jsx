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
    <div className="form-section skills-container flex">
      <div className="form-title-container">
        <span className="form-section-title">Skills</span>
      </div>
      <div className="stack-container flex flex-col flex-grow">
        <div className="category-container">
          <form
            className="flex flex-col justify-start gap-2 content-start"
            onSubmit={handleSubmit}
          >
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
            <div className="button-container flex flex-row gap-4 justify-end">
              <div className="remove-container flex flex-row justify-start my-2">
                <button type="remove" className="remove-button">
                  REMOVE
                </button>
              </div>
              <div className="submit-container flex flex-row justify-start my-2">
                <button type="submit" className="submit-button">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
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
