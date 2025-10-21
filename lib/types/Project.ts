export type Projects = {
  id: number;
  title: string;
  link: string;
  gitLink: string;
  img: string;
  tags: string[];
  desc:string;
  theCreativeProcess: {
    title : string;
    desc : string;
  }[];
  features : string[];
}

export type MyWork = Omit<Projects, 'gitLink' | 'desc' | 'theCreativeProcess' | 'features'> & {
  role: string;
  highlights: string[];
  videoSrc: string;
  location: string;
};