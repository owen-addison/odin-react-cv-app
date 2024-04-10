import FormGroup from './FormGroup';
import { useState } from 'react';

function Personal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    website: '',
    about: '',
  });

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <div className="personal-container">
        <form className="flex flex-col justify-start gap-2 content-start">
          <FormGroup
            label="Name:"
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required={true}
          />
          <FormGroup
            label="Email:"
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required={true}
          />
          <FormGroup
            label="Number:"
            type="tel"
            id="telephone"
            value={formData.telephone}
            pattern="[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*"
            onChange={(e) => handleChange('telephone', e.target.value)}
            required={true}
          />
          <FormGroup
            label="Website:"
            type="url"
            id="website"
            value={formData.website}
            onChange={(e) => handleChange('telephone', e.target.value)}
            required={true}
          />
          <FormGroup
            label="About:"
            type="textarea"
            id="about"
            value={formData.about}
            onChange={(e) => handleChange('about', e.target.value)}
            required={true}
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Personal;

/*
PSEUDOCODE

Name:
- Placeholder for name with edit button.
- Make mandatory field when editing.
- Label for name (first and last or both in one).
- Input for name (first and last or both in one).
- State used to tell when editing.
- When editing the input should appear under the name or the name
should become editable.
- When not editing the inputs should disappear.
- State used to update name on form in real time.

Email:
- Placeholder for email with edit button.
- Make mandatory field when editing.
- Label email.
- Input for email.
- State used to show edit button when hovering over email.
- State used to tell when editing.
  - When editing the input should appear under the email or the field
    should become editable.
  - When not editing the inputs should disappear.
- State used to update email on form in real time.
*/
