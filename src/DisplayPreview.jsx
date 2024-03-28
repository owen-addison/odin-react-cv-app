function DisplayPreview() {
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

export default DisplayPreview;
