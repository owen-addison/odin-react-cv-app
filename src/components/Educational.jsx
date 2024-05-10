import Experience from './Experience';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
// import { useState } from 'react';

function Educational({ educationalSections, setEducationalSections }) {
  // Function to add a new experience section
  const handleAddExperience = () => {
    const newSection = {
      id: uniqid(), // Generate a unique ID
      institute: '',
      study: '',
      grade: '',
      startDate: '',
      endDate: '',
      stillHere: false,
      description: '',
      complete: false,
    };

    setEducationalSections([...educationalSections, newSection]);
  };

  return (
    <>
      <div className="form-section educational-container">
        <div className="form-title-container">
          <span className="form-section-title">Educational Experience</span>
        </div>
        <div className="stack-container flex flex-col flex-grow">
          {educationalSections.map((section) => (
            <Experience
              key={section.id}
              type="Educational"
              experienceDetails={{
                ...section,
                complete: section.complete || false,
              }}
              setExperienceDetails={(newDetails) => {
                // Update the specific section details in the state
                setEducationalSections((prevSections) =>
                  prevSections.map((prevSection) =>
                    prevSection.id === section.id ? newDetails : prevSection,
                  ),
                );
              }}
              onRemove={() => {
                setEducationalSections((prevSections) =>
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
      </div>
    </>
  );
}

Educational.propTypes = {
  educationalSections: PropTypes.array.isRequired,
  setEducationalSections: PropTypes.func.isRequired,
};

export default Educational;
