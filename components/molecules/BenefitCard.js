import PropTypes from "prop-types";

export function BenefitCard(props) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {props.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {props.description}
        </p>
      </div>
      <div className="border-t border-gray-200">
        {/* TODO: these links will be replaced by a component when they are created */}
        <a href={`/benefit/${props.id}`}>More info</a>
        <a href={props.applyLink}>Apply now!</a>
      </div>
    </div>
  );
}

BenefitCard.propTypes = {
  // benefit id
  id: PropTypes.string.isRequired,

  // benefit title
  title: PropTypes.string.isRequired,

  // benefit description
  description: PropTypes.string,

  // link to apply to the benefit
  applyLink: PropTypes.string,
};
