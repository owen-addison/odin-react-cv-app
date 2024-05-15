import { useState } from 'react';
import ButtonContainer from './ButtonContainer';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import uniqid from 'uniqid';

function Category({ category, onRemove, onSubmit }) {
  const [formValues, setFormValues] = useState({ ...category });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...formValues, complete: true });
  };

  return (
    <div className="category-container">
      <form
        className="flex flex-col justify-start content-start"
        onSubmit={handleSubmit}
      >
        <FormGroup
          label="Category:"
          type="text"
          id="category"
          value={formValues.category || ''}
          onChange={handleChange}
          required={true}
          placeholder={category.category}
        />
        <FormGroup
          label="Skills:"
          type="textarea"
          id="skills"
          value={formValues.skills || ''}
          className="skills-list"
          onChange={handleChange}
          required={true}
          placeholder={category.skills}
        />
        <ButtonContainer onRemove={onRemove} onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    skills: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function Skills({ skillsCategories, setSkillsCategories }) {
  const handleAddCategory = () => {
    const newCategory = {
      id: uniqid(),
      category: '',
      skills: '',
    };
    setSkillsCategories([...skillsCategories, newCategory]);
  };

  const handleRemoveCategory = (categoryId) => {
    setSkillsCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryId),
    );
  };

  const handleSubmitCategory = (updatedCategory) => {
    setSkillsCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category,
      ),
    );
  };

  return (
    <div className="form-section skills-container flex">
      <div className="form-title-container">
        <span className="form-section-title">Skills</span>
      </div>
      <div className="stack-container flex flex-col flex-grow">
        {skillsCategories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onRemove={() => handleRemoveCategory(category.id)}
            onSubmit={handleSubmitCategory}
          />
        ))}
        <button type="button" onClick={handleAddCategory}>
          + category
        </button>
      </div>
    </div>
  );
}

Skills.propTypes = {
  skillsCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      skills: PropTypes.string,
    }),
  ).isRequired,
  setSkillsCategories: PropTypes.func.isRequired,
};

export default Skills;
