const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  my: () => import("./dictionaries/my.json").then((module) => module.default),
};

export const getDictionary = async (lang) => {
  return dictionaries[lang]();
};
