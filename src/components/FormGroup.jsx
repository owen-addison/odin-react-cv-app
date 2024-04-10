function FormGroup({ label, type, id, pattern, placeholder, required }) {
  return (
    <div className="form-group grid grid-cols-2 gap-4 items-center">
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

export default FormGroup;
