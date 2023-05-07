import propTypes from 'prop-types';

export const Section = ({ title }) => (
  <div>
    <h2>{title}</h2>
  </div>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
};