export type review = {
    author: string,
    published_on: string,
    review: string,
    rating: number,
}

export type movie = {
    id: string,
    name: string,
    cover: string, 
    rating: number,
    reviews: review [],
}

