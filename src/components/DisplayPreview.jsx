import PropTypes from 'prop-types';

function DisplayPreview({ personalDetails, educationalSections }) {
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
          <div className="education-section">
            {educationalSections.map((section) => (
              <div className="experience-section" key={section.id}>
                <div className="container">
                  <h3 className="font-semibold">Institution:</h3>
                  <p className="institution">{section.institute}</p>
                </div>
                <div className="container">
                  <h3 className="font-semibold">Study:</h3>
                  <p className="study">{section.study}</p>
                </div>
                <div className="container">
                  <h3 className="font-semibold">Dates:</h3>
                  <p className="dates">
                    {section.startDate} -{' '}
                    {section.stillHere ? `present` : section.endDate}
                  </p>
                </div>
                <div className="container">
                  <h3 className="font-semibold">Description:</h3>
                  <p className="description">{section.description}</p>
                </div>
              </div>
            ))}
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
  educationalSections: PropTypes.array,
};

export default DisplayPreview;
