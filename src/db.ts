export interface navitaionContextType{
    navigateLinks: string[],
}
export interface planetType{
    name: string;
    color: string;
}
export interface MyComponentProps{
    menu:boolean;
    setMenu:React.Dispatch<React.SetStateAction<boolean>>;
}