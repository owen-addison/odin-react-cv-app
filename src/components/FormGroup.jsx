import PropTypes from 'prop-types';

function FormGroup({
  label,
  type,
  id,
  pattern,
  placeholder,
  required,
  onChange,
  disabled,
  className,
}) {
  return (
    <div className="form-group grid grid-cols-[1fr,3fr] gap-4 justify-items-start items-center text-start text-sm">
      <label
        htmlFor={id}
        className={
          type === 'textarea'
            ? id === 'skills'
              ? 'self-center'
              : 'self-start'
            : 'self-center'
        }
      >
        {label}
      </label>
      {type !== 'textarea' ? (
        <input
          type={type}
          id={id}
          name={id}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          disabled={disabled}
          className={`input-class ${className === undefined ? '' : className}`}
        />
      ) : (
        <textarea
          id={id}
          name={id}
          required={required}
          onChange={onChange}
          className={`textarea-class ${className}`}
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
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default FormGroup;
