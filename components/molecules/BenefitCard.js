import Link from "next/link";
import PropTypes from "prop-types";

export function BenefitCard(props) {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {props.title}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">{props.description}</p>
      </div>
      <div class="border-t border-gray-200">
        <Link href={`/benefit/${props.id}`}>
          <a>More info</a>
        </Link>
        <Link href={props.applyLink}>
          <a>Apply now!</a>
        </Link>
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
