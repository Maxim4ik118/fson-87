export const Button = props => {
  const { variant = 'red', children, discount = false, buttonNumber } = props;

  return (
    <button className={variant}>
      {buttonNumber}
      {children}
      {discount && <span className="sale">Sale</span>}
    </button>
  );
};
