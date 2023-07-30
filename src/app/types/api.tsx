export type PagesData = {
  url: string;
  id: string;
};

export type Page = {
  url: string;
  id: string;
  sections: Section[];
};

export type Section = {
  type: string;
  text: string;
  img?: string;
  author: string;
};
