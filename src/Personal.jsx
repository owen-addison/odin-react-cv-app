function Personal() {
  return (
    <>
      <div className="personal-section">
        <div className="container">
          <h1 id="name">John Daniel Smith</h1>
        </div>
        <div className="container">
          <ul className="contact-list">
            <li id="email">john-daniel-smith@me.com</li>
            <li id="phone-number">+44 (0) 7897897897</li>
            <li id="website">www.john-d-smith.me</li>
          </ul>
        </div>
        <div className="container">
          <p id="about">
            Brief introduction of yourself and your motivations...
          </p>
        </div>
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
