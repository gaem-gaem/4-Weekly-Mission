export interface SampleFolder {
  folder: {
    id: string;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links: [
      {
        id: number;
        createdAt: string;
        url: string;
        title: string;
        description: string;
        imageSource: string;
      }
    ];
  };
}

export interface SampleUser {
  name: string;
  email: string;
  profileImageSource: string;
}
