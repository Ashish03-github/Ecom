export interface ProductRating {
    count: number;
    rate: number;
};

export interface OrderHistoryCardItem {
    orderId: string;
    date: string;
    total: number;

    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
    quantity: number;
};