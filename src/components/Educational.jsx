import Experience from './Experience';
import uniqid from 'uniqid';
import { useState } from 'react';

function Educational() {
  const [educationalSections, setEducationalSections] = useState([]);

  // Function to add a new experience section
  const handleAddExperience = () => {
    const newSection = {
      id: uniqid(), // Generate a unique ID
      institute: '',
      study: '',
      startDate: '',
      endDate: '',
      stillHere: false,
      description: '',
    };

    setEducationalSections([...educationalSections, newSection]);
  };

  return (
    <>
      <div className="educational-container">
        {educationalSections.map((section) => (
          <Experience
            key={section.id}
            type="Educational"
            experienceDetails={section} // Pass the section details as experienceDetails
            setExperienceDetails={(newDetails) => {
              // Update the specific section details in the state
              setEducationalSections((prevSections) =>
                prevSections.map((prevSection) =>
                  prevSection.id === section.id ? newDetails : prevSection,
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

export default Educational;
