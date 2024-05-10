import PropTypes from 'prop-types';

function ExperienceSectionCV({ title, sections }) {
  return (
    <div className="experience-section px-6 py-4 text-left">
      <h2 className="section-title font-semibold text-lg mb-2">{title}</h2>
      {sections
        .filter(
          (section) =>
            section.complete && Object.values(section).some((value) => value),
        )
        .map((section) => (
          <div className="experience-item mb-4" key={section.id}>
            <div className="flex justify-between">
              <div className="flex flex-row gap-7">
                <h3 className="font-semibold">
                  {section.company || section.institute}
                </h3>
                <div className="flex flex-row">
                  <p className="position">
                    {section.position || section.study}
                  </p>
                  {section.grade ? (
                    <p className="grade italic font-medium">
                      <span className="hyphen mx-1 font-normal">-</span>
                      {section.grade}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <p className="dates">
                {new Date(section.startDate).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
                <span className="hyphen mx-2 font-normal">-</span>
                {section.stillHere
                  ? 'Present'
                  : new Date(section.endDate).toLocaleString('default', {
                      month: 'long',
                      year: 'numeric',
                    })}
              </p>
            </div>
            <ul className="list-disc ml-4 mt-2">
              {section.description.split('\n').map((bullet, index) => (
                <li key={index} className="list-none">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

ExperienceSectionCV.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
};

export default ExperienceSectionCV;
