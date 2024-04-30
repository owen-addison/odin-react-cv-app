import Experience from './Experience';
import { useState } from 'react';

function Educational() {
  const [experienceSections, setExperienceSections] = useState([]);

  // Function to add a new experience section
  const handleAddExperience = () => {
    setExperienceSections((prevSections) => [
      ...prevSections,
      { id: Math.random().toString(36).substr(2, 9) }, // Generate a unique ID for each section
    ]);
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
            Add Experience
          </button>
        </div>
      </div>
    </>
  );
}

export default Educational;
