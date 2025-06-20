export interface navitaionContextType{
    navigateLinks: string[],
}
export interface planetType{
    name: string;
    color: string;
}
export interface PlanetData {
  name: string;
  color: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

export interface MyComponentProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;

}
