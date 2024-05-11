import Personal from './Personal';
import Educational from './Educational';
import Professional from './Professional';
import Skills from './Skills';
import PropTypes from 'prop-types';

function Form({
  personalDetails,
  setPersonalDetails,
  educationalSections,
  setEducationalSections,
  professionalSections,
  setProfessionalSections,
  skillsCategories,
  setSkillsCategories,
  dummyPersonalDetails,
  dummyEducationalSections,
  dummyProfessionalSections,
  dummySkillsCategories,
}) {
  // Function to update personal details when the form is submitted
  const handlePersonalDetailsSubmit = (newDetails) => {
    setPersonalDetails(newDetails);
  };

  return (
    <>
      <div className="form-container pb-4 w-1/3 min-w-96 flex flex-col content-start space-y-4">
        <Personal
          personalDetails={personalDetails}
          setPersonalDetails={handlePersonalDetailsSubmit}
          dummyPersonalDetails={dummyPersonalDetails}
        />
        <Educational
          educationalSections={educationalSections}
          setEducationalSections={setEducationalSections}
          dummyEducationalSections={dummyEducationalSections}
        />
        <Professional
          professionalSections={professionalSections}
          setProfessionalSections={setProfessionalSections}
          dummyProfessionalSections={dummyProfessionalSections}
        />
        <Skills
          skillsCategories={skillsCategories}
          setSkillsCategories={setSkillsCategories}
          dummySkillsCategories={dummySkillsCategories}
        />
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
  educationalSections: PropTypes.array,
  setEducationalSections: PropTypes.func.isRequired,
  professionalSections: PropTypes.array,
  setProfessionalSections: PropTypes.func.isRequired,
  skillsCategories: PropTypes.array,
  setSkillsCategories: PropTypes.func.isRequired,
  dummyPersonalDetails: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    website: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  dummyEducationalSections: PropTypes.array.isRequired,
  dummyProfessionalSections: PropTypes.array.isRequired,
  dummySkillsCategories: PropTypes.array.isRequired,
};

export default Form;
