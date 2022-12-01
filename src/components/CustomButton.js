function CustomButton(props) {
  const { color, onClick, children } = props;

  return (
    <button className="add-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
