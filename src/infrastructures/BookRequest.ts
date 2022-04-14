export interface AuthorRequest {
    key: string
}

export interface DescriptionRequest {
    type: string,
    value: string,
}

export default interface BookRequest {
    key: string,
    authors: Array<AuthorRequest>,
    title: string,
    publish_date: string,
    description: DescriptionRequest | string,
    subtitle: string
}