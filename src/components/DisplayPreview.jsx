import PropTypes from 'prop-types';

function DisplayPreview({ personalDetails }) {
  return (
    <>
      <div id="cv-container" className="mx-10">
        <div id="cv" className="w-a4 h-a4 bg-white text-slate-800">
          <div className="personal-section">
            <div className="container">
              <h1 id="name">{personalDetails.name}</h1>
            </div>
            <div className="container">
              <ul className="contact-list">
                <li id="email">{personalDetails.email}</li>
                <li id="phone-number">{personalDetails.telephone}</li>
                <li id="website">{personalDetails.website}</li>
              </ul>
            </div>
            <div className="container">
              <p id="about">{personalDetails.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

DisplayPreview.propTypes = {
  personalDetails: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    website: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
};

export default DisplayPreview;
