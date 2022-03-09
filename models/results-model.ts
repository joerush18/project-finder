class ResultModel {
  name: string;
  id: string;
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

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.repoLink = data.repoLink;
    this.createdAt = data.createdAt;
    this.stars = data.stars;
    this.forks = data.forks;
    this.language = data.language;
    this.author.authorAvatar = data.author.authorAvatar;
    this.author.authorUname = data.author.authorUname;
    this.author.authorProfile = data.author.authorProfile;
    this.topics = data.topics;
  }
}

export default ResultModel;
