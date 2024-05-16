import ExperienceSectionCV from './ExperienceSectionCV';
import PropTypes from 'prop-types';
import html2pdf from 'html2pdf.js';

function DisplayPreview({
  personalDetails,
  educationalSections,
  professionalSections,
  skillsCategories,
}) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-GB', {
    month: 'long',
    year: 'numeric',
  });

  const handleDownloadPDF = () => {
    const cvElement = document.getElementById('cv');
    const opt = {
      margin: [0, 0, 0, 0],
      filename: 'my_cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(cvElement).set(opt).save();
  };

  return (
    <>
      <div id="cv-container" className="mx-10 mb-4">
        <div id="cv" className="w-a4 h-a4 bg-white text-slate-800 relative">
          <div className="personal-section px-6 py-4">
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
          <ExperienceSectionCV
            title="EDUCATION & TRAINING"
            sections={educationalSections}
          />
          <ExperienceSectionCV
            title="PROFESSIONAL EXPERIENCE"
            sections={professionalSections}
          />
          <div className="skills-section px-6 py-4 text-left">
            <h2 className="section-title font-semibold text-lg mb-2">SKILLS</h2>
            <div className="flex flex-col space-y-4">
              {skillsCategories
                .filter(
                  (category) =>
                    category.complete &&
                    Object.values(category).some((value) => value),
                )
                .map((category) => (
                  <div
                    className="category-section flex flex-row"
                    key={category.id}
                  >
                    <h3 className="category-title font-semibold mr-4">
                      {category.category}
                    </h3>
                    <p className="skills-list">{category.skills}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="timestamp absolute bottom-4 right-6 text-xs text-right">
            {formattedDate}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button onClick={handleDownloadPDF} className="download-button">
            DOWNLOAD PDF
          </button>
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
