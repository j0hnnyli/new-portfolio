export type Projects = {
  id: number;
  title: string;
  link: string;
  gitLink: string;
  img: string;
  tags: string[];
  desc:string;
  laptopImg : string;
  theCreativeProcess: {
    title : string;
    desc : string;
  }[];
  features : string[];
}