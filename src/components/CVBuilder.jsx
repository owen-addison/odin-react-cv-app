import Personal from './Personal';
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

  // Function to update personal details when the form is submitted
  const handlePersonalDetailsSubmit = (newDetails) => {
    setPersonalDetails(newDetails);
  };

  return (
    <>
      <div className="form-container w-96 flex flex-col content-start">
        <Personal
          personalDetails={personalDetails}
          setPersonalDetails={handlePersonalDetailsSubmit}
        />
      </div>
      <DisplayPreview personalDetails={personalDetails} />
    </>
  );
}

export default CVBuilder;
