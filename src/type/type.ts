interface SampleFolder {
  folder: {
    id: string;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
  };
}

export default SampleFolder;
