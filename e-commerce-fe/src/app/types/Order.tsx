
export type OrderStatus = "active" | "canceled" | "purchased" | "preparing" | "inCart"; // Extendable for other statuses

export default interface Order {
    status: OrderStatus;
    ownerId: number;
    productId: number;
    address: string;
    amount: number;
    createdTime: number;
    purchasedTime: number | null;
}