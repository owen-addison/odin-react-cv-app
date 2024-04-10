import FormGroup from './FormGroup';

function Personal() {
  return (
    <>
      <div className="personal-container">
        <form className="flex flex-col justify-start content-start">
          <FormGroup label="Name" type="text" id="name" required={true} />
          <FormGroup label="Email" type="email" id="email" required={true} />
          <FormGroup
            label="Telephone Number"
            type="tel"
            id="telephone"
            pattern="[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*"
            required={true}
          />
          <FormGroup label="Website" type="url" id="website" required={true} />
          <FormGroup
            label="About/Introduction"
            type="textarea"
            id="about"
            required={true}
          />

          <button type="submit">Submit</button>
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
