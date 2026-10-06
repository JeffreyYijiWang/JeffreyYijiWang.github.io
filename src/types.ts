export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  kind?: 'image' | 'video';
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: 'repository' | 'demo' | 'site';
};

export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  summary: string;
  tldr: string;
  tags: string[];
  categories: string[];
  graphics: boolean;
  media: ProjectMedia[];
  links: ProjectLink[];
  facts?: Array<{ label: string; value: string }>;
  sections: ProjectSection[];
  related?: string[];
  todo?: string;
};
