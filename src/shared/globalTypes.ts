export interface IUser{
    addres: {
        city: string,
        geo: {
            lat: string,
            lng: string,
        }
        street: string,
        suite: string,
        zipcode: string,
    }
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    }
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}

export interface IPost{
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface IPhoto{
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

export interface IUserProfileState{
    id: number;
    name: string;
    email: string;
}
