import PropTypes from 'prop-types';

function FormGroup({ label, type, id, pattern, placeholder, required }) {
  return (
    <div className="form-group grid grid-cols-2 gap-4 justify-items-start items-start">
      <label htmlFor={id}>{label}</label>
      {type !== 'textarea' ? (
        <input
          type={type}
          id={id}
          name={id}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          className="input-class"
        />
      ) : (
        <textarea
          id={id}
          name={id}
          required={required}
          className="textarea-class"
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default FormGroup;
