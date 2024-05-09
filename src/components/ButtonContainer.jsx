import PropTypes from 'prop-types';

function ButtonContainer({ onRemove, onSubmit }) {
  return (
    <div className="button-container flex flex-row gap-4 justify-end">
      <div className="remove-container flex flex-row justify-start my-2">
        <button type="button" className="remove-button" onClick={onRemove}>
          REMOVE
        </button>
      </div>
      <div className="submit-container flex flex-row justify-start my-2">
        <button type="submit" className="submit-button" onClick={onSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

ButtonContainer.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonContainer;
