import { useState } from 'react';
import ButtonContainer from './ButtonContainer';
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

  const handleRemove = () => {
    setSkillsCategories((prevCategories) =>
      prevCategories.filter((category) => category !== formValues),
    );
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
            <ButtonContainer onRemove={handleRemove} onSubmit={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {
  skillsCategories: PropTypes.array,
  setSkillsCategories: PropTypes.func.isRequired,
};

export default Skills;
