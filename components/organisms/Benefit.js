import PropTypes from "prop-types";

export const Benefit = ({ type, outcomes, provider }) => {
  return (
    <div>
      <section>{type}</section>
      <section>{outcomes}</section>
      <section>{provider}</section>
    </div>
  );
};

Benefit.propTypes = {
  /**
   * text for the benefit type
   */
  type: PropTypes.string,
  /**
   * text for the outcomes of benefit
   */
  outcomes: PropTypes.string,
  /**
   * text for who the benefit provider is
   */
  provider: PropTypes.string,
};
