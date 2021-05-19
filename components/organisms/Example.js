import PropTypes from "prop-types";

import { useTranslation } from "next-i18next";
import { NumInput } from "../atoms/NumInput";
import { SelectPicker } from "../atoms/SelectPicker";
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";
//import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { ChevronUpIcon } from '@heroicons/react/solid'

// export async function getServerSideProps(context) {
//   const locale = context.locale || context.defaultLocale;

//   const popularCategories = await getPopularCategories(locale);

//   const situation = JSON.parse(context.req.cookies?.situation ?? "{}");

//   return {
//     props: {
//       locale,
//       ...(await serverSideTranslations(locale, ["common"])),
//       popularCategories,
//       situationCookie: situation,
//     },
//   };
// }

export default function Example() {
  const { t } = useTranslation("common");
  // const handleSituationChange = (e) => {
  //   const { name, value } = e.target;
  //   setSituation((previousState) => ({
  //     ...previousState,
  //     [name]: value,
  //   }));
  // };
  // const [situation, setSituation] = useState({
  //   location: situationCookie.location,
  //   age: situationCookie.age,
  //   income: situationCookie.income,
  // });

  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Your Age</span>
                <span
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <NumInput
                  id="age"
                  name="age"
                  criteriaTitle={t("age.title")}
                  placeholder={t("age.placeholder")}
                  // defaultValue={situation.age}
                  // onChange={handleSituationChange}
                ></NumInput>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Location</span>
                <span
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <SelectPicker
                  criteriaTitle={t("location.title")}
                  id="location-select"
                  ariaLabel="location-select"
                  name="location"
                  dataCy="location-select-picker"
                  // defaultValue={situation.location}
                  // onChange={handleSituationChange}
                  selects={[
                    {
                      criteriaSelect: t("location.on"),
                    },
                    {
                      criteriaSelect: t("location.ab"),
                    },
                    {
                      criteriaSelect: t("location.mb"),
                    },
                    {
                      criteriaSelect: t("location.nb"),
                    },
                    {
                      criteriaSelect: t("location.nl"),
                    },
                    {
                      criteriaSelect: t("location.ns"),
                    },
                    {
                      criteriaSelect: t("location.nu"),
                    },
                    {
                      criteriaSelect: t("location.pe"),
                    },
                    {
                      criteriaSelect: t("location.sk"),
                    },
                    {
                      criteriaSelect: t("location.bc"),
                    },
                    {
                      criteriaSelect: t("location.yt"),
                    },
                  ]}
                ></SelectPicker>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

Example.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
