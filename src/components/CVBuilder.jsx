import Form from './Form';
import DisplayPreview from './DisplayPreview';
import { useState } from 'react';

function CVBuilder() {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'John Daniel Smith',
    email: 'john-daniel-smith@me.com',
    phoneNumber: '+44 (0) 7897897897',
    website: 'www.john-d-smith.me',
    about: 'Brief introduction of yourself and your motivations...',
  });
  const [educationalSections, setEducationalSections] = useState([]);
  const [professionalSections, setProfessionalSections] = useState([]);

  return (
    <>
      <Form
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationalSections={educationalSections}
        setEducationalSections={setEducationalSections}
        professionalSections={professionalSections}
        setProfessionalSections={setProfessionalSections}
      />
      <DisplayPreview
        personalDetails={personalDetails}
        educationalSections={educationalSections}
      />
    </>
  );
}

export default CVBuilder;
