import uuid from 'react-native-uuid';
import { Product } from '@/features/Products/types/product.type';
import { addDataToStorage, getDataFromStorage } from '@/services/app.storage';
import { ordersStorageKey } from '../constants/orders.storage.keys';

export interface StoredOrderItem extends Product {
    orderId: string;
    date: string;
    total: number;
}

export const saveOrderToStorage = async (
    items: Product[],
    total: number
) => {
    const orderId = uuid.v4() as string;
    const date = new Date().toISOString();

    const orderItems: StoredOrderItem[] = items.map(item => ({
        orderId,
        date,
        total,
        ...item,
    }));

    const existing = await getDataFromStorage(ordersStorageKey.orderHistory);
    const updatedData = existing?.data
        ? [...existing.data, ...orderItems]
        : orderItems;

    await addDataToStorage(ordersStorageKey.orderHistory, updatedData);

    return orderId
};
