// outsource dependencies

// local dependencies

export class BaseApiResponse {
    constructor(
        public id: string,
        public urls: {
            raw: string;
            thumb: string;
        },
        public users: {
            name: string;
            portfolio_url: string | null;
        }
    ) {}
}

export enum TYPES {
    INITIALIZED_APP = 'INITIALIZED_APP',
}

// export interface BaseApiResponse {
//     id: string
//     created_at: string
//     updated_at: string
//     promoted_at: null
//     width: number
//     height: number
//     color: string
//     description: string
//     alt_description: string
//     urls: {
//         [key: string]: string
//     };
//     links: responseObject
//     categories: []
//     likes: number
//     liked_by_user: boolean
//     current_user_collections: []
//     sponsorship: {
//         impression_urls: Array<string>
//         tagline	: string
//         tagline_url:	null | string
//         sponsor: any
//     };
//     user: {
//         id: string
//         updated_at: string
//         username:	string
//         name: string
//         first_name: string
//         last_name: null | string
//         twitter_username: null | string
//         portfolio_url: null | string
//         bio: null | string
//         location: null | string
//         links: {
//             [key: string]: string
//         }
//         profile_image: {
//             [key: string]: string
//         }
//         instagram_username: string
//         total_collections: number
//         total_likes: number
//         total_photos: number
//         accepted_tos: boolean
//     }
// }

// export type UsersResponseType =  {
//     items: Array<UserType>
//     totalCount: number
//     error: string
// }
//
// export type ProfilePhotoResponseType = {
//     photos: PhotosType
// }
//
// export type AuthMeResponseType = {
//     id: number
//     email: string
//     login: string
// };
