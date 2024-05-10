import {
  dummyPersonalDetails,
  dummyEducationalSections,
  dummyProfessionalSections,
  dummySkillsCategories,
} from '../dummyData';
import Form from './Form';
import DisplayPreview from './DisplayPreview';
import { useState } from 'react';

function CVBuilder() {
  const [personalDetails, setPersonalDetails] = useState(dummyPersonalDetails);
  const [educationalSections, setEducationalSections] = useState(
    dummyEducationalSections,
  );
  const [professionalSections, setProfessionalSections] = useState(
    dummyProfessionalSections,
  );
  const [skillsCategories, setSkillsCategories] = useState(
    dummySkillsCategories,
  );

  return (
    <>
      <Form
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationalSections={educationalSections}
        setEducationalSections={setEducationalSections}
        professionalSections={professionalSections}
        setProfessionalSections={setProfessionalSections}
        skillsCategories={skillsCategories}
        setSkillsCategories={setSkillsCategories}
      />
      <DisplayPreview
        personalDetails={personalDetails}
        educationalSections={educationalSections}
        professionalSections={professionalSections}
        skillsCategories={skillsCategories}
      />
    </>
  );
}

export default CVBuilder;
