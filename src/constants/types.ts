// outsource dependencies

// local dependencies

export interface Hits {
    comments: number;
    downloads: number;
    favorites: number;
    id: number;
    imageHeight: number;
    imageSize: number;
    imageWidth: number;
    largeImageURL: string;
    likes: number;
    pageURL: string;
    previewHeight: number;
    previewURL: string;
    previewWidth: number;
    tags: string;
    type: string;
    user: string;
    userImageURL: string;
    user_id: number;
    views: number;
    webformatHeight: number;
    webformatURL: string;
    webformatWidth: number;
}

export interface BaseApiResponse {
    readonly hits: Array<Hits>;
    readonly total: number;
    readonly totalHits: number;
}

export interface DataPayload {
    [key: string]: Array<Hits>;
}

export enum TYPES {
    DATA = '@prefix/DATA',
    INITIALIZED_APP = 'INITIALIZED_APP',
}
