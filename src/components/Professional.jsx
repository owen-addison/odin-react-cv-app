import Experience from './Experience';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

function Professional({ professionalSections, setProfessionalSections }) {
  // Function to add a new experience section
  const handleAddExperience = () => {
    const newSection = {
      id: uniqid(), // Generate a unique ID
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      stillHere: false,
      description: '',
      complete: false,
    };

    setProfessionalSections([...professionalSections, newSection]);
  };

  return (
    <>
      <div className="professional-container">
        {professionalSections.map((section) => (
          <Experience
            key={section.id}
            type="Professional"
            experienceDetails={{
              ...section,
              complete: section.complete || false,
            }}
            setExperienceDetails={(newDetails) => {
              // Update the specific section details in the state
              setProfessionalSections((prevSections) =>
                prevSections.map((prevSection) =>
                  prevSection.id === section.id ? newDetails : prevSection,
                ),
              );
            }}
            onRemove={() => {
              setProfessionalSections((prevSections) =>
                prevSections.filter(
                  (prevSection) => prevSection.id !== section.id,
                ),
              );
            }}
          />
        ))}
        <div className="add-experience-container">
          <button type="button" onClick={handleAddExperience}>
            + experience
          </button>
        </div>
      </div>
    </>
  );
}

Professional.propTypes = {
  professionalSections: PropTypes.array.isRequired,
  setProfessionalSections: PropTypes.func.isRequired,
};

export default Professional;
