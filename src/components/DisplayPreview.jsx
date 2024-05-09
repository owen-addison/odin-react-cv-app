import PropTypes from 'prop-types';

function DisplayPreview({
  personalDetails,
  educationalSections,
  professionalSections,
  skillsCategories,
}) {
  return (
    <>
      <div id="cv-container" className="mx-10 mb-4">
        <div id="cv" className="w-a4 h-a4 bg-white text-slate-800">
          <div className="personal-section px-6 py-4 bg-gray-200">
            <div className="header flex flex-row justify-between">
              <div className="header-left text-start">
                <h1
                  id="name"
                  className="font-semibold text-xl tracking-widest mb-1"
                >
                  {personalDetails.name}
                </h1>
                <p id="about" className="text-sm max-w-xl">
                  {personalDetails.about}
                </p>
              </div>
              <div className="header-right">
                <ul className="contact-list text-end text-xs space-y-1">
                  <li id="email">{personalDetails.email}</li>
                  <li id="phone-number">{personalDetails.telephone}</li>
                  <li id="website">{personalDetails.website}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="education-section">
            {educationalSections
              .filter(
                (section) =>
                  section.complete &&
                  Object.values(section).some((value) => value),
              )
              .map((section) => (
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
          <div className="professional-section">
            {professionalSections
              .filter(
                (section) =>
                  section.complete &&
                  Object.values(section).some((value) => value),
              )
              .map((section) => (
                <div className="experience-section" key={section.id}>
                  <div className="container">
                    <h3 className="font-semibold">Company:</h3>
                    <p className="company">{section.company}</p>
                  </div>
                  <div className="container">
                    <h3 className="font-semibold">Position:</h3>
                    <p className="position">{section.position}</p>
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
          <div className="skills-section">
            {skillsCategories
              .filter(
                (section) =>
                  section.complete &&
                  Object.values(section).some((value) => value),
              )
              .map((section) => (
                <div className="categories-section" key={section.id}>
                  <div className="container">
                    <h3 className="font-semibold category-name">
                      {section.category}:
                    </h3>
                  </div>
                  <div className="container">
                    <p className="category-skills">{section.skills}</p>
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
  professionalSections: PropTypes.array,
  skillsCategories: PropTypes.array,
};

export default DisplayPreview;
