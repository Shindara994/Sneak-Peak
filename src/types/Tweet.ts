export type Tweet = {
    id: number;
    name?: string;
    username?: string;
    createdAt?: string;
    text: string;
    replies?: number;
    tag?: string;
}