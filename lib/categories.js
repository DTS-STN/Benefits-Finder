// todo: get data from the cms, determine popular categories some other way - maybe analytics?
export function getPopularCategories(locale) {
  return [
    {
      id: `cat-1`,
      title: `[${locale}] Category 1`,
      description: `[${locale}] Description for category 1`,
      type: `[${locale}] OAS`,
      imgSource: `/sig-blk-en.svg`,
      imgAltText: `[${locale}] just an image of something`,
    },
    {
      id: `cat-2`,
      title: `[${locale}] Category 2`,
      description: `[${locale}] Description for category 2`,
      type: `[${locale}] EI`,
      imgSource: `/vercel.svg`,
      imgAltText: `[${locale}] just an image of something`,
    },
    {
      id: `cat-3`,
      title: `[${locale}] Category 3`,
      description: `[${locale}] Description for category 3`,
      type: `[${locale}] Programs`,
      imgSource: `/wmms-blk.svg`,
      imgAltText: `[${locale}] just an image of something`,
    },
  ];
}
