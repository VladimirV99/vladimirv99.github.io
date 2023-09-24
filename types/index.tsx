export type Slide = {
  image: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
  slides?: Slide[];
};

export type ListItemData = {
  title: string;
  description?: string;
  extra?: string;
  date?: string;
};
