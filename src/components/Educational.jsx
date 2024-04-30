import Experience from './Experience';
import uniqid from 'uniqid';
import { useState } from 'react';

function Educational() {
  const [experienceSections, setExperienceSections] = useState([]);

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

    setExperienceSections([...experienceSections, newSection]);
  };

  return (
    <>
      <div className="educational-container">
        {experienceSections.map((section) => (
          <Experience
            key={section.id}
            type="Educational"
            educationDetails={section} // Pass the section details as educationDetails
            setEducationDetails={(newDetails) => {
              // Update the specific section details in the state
              setExperienceSections((prevSections) =>
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
