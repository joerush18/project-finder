export interface ResultsInterface {
  id: string;
  name: string;
  desc: string;
  repoLink: string;
  createdAt: string;
  stars: number;
  forks: number;
  language: string;
  author: {
    authorAvatar: string;
    authorUname: string;
    authorProfile: string;
  };
  topics: String[];
}

export interface CardProps {
  result: ResultsInterface;
  isBookmark: boolean;
}
