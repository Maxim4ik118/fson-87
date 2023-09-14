import css from './Heading.module.css';

export const Heading = ({ children, className = '' }) => {
  return <h1 className={`${css.headingLv1} ${className}`}>{children}</h1>;
};
