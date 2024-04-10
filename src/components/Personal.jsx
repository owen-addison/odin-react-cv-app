function Personal() {
  return (
    <>
      <div className="personal-container">
        <form className="flex flex-col justify-start content-start">
          <div className="form-group grid ">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Telephone Number</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              pattern="[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*"
              title="Phone number with +, -, and space. Including country code is encouraged."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="url" id="website" name="website" required />
          </div>

          <div className="form-group">
            <label htmlFor="about">About/Introduction</label>
            <textarea id="about" name="about" required></textarea>
          </div>

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
