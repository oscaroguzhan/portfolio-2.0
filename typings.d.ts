// all of the sanity responses tend to have this 4 properties
// create a common interface and inherit all the define type from this interface
interface sanityBody {
    _createdAt:string;
    _id:string;
    _rev:string;
    _updatedAt:string;
}

interface Image {
    _type:"image";
    assets:{
        _ref:string;
        _type:"reference";
    };
}
// create a Social type that has all these properties and more
export interface Social extends sanityBody {
    //additionally we have
    _type:"social";
    title:string;
    url:string;
}

export interface PageInfo extends sanityBody {
    _type:"pageInfo";
    adress:string;
    backgroundText:string;
    email:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;
    role:string
}
export interface Technology extends sanityBody {
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}
export interface Skill extends sanityBody {
    _type:'skill';
    image:Image;
    progress:number;
    title:string;
}
export interface Project extends sanityBody {
    _type:"project";
    image:Image;
    link:string;
    summary:string;
    technologies:Technology[];
}
export interface Experience extends sanityBody {
    _type:"experience";
    dateEnded:date;
    dateStarted:date;
    isCurrentlyHere:boolean;
    logo:Image;
    title:string;
    position:string;
    technologies:Technology[];
    points:string[];
}