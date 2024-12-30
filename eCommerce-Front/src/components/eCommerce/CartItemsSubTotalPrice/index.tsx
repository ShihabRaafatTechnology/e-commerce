import { TProduct } from "@customTypes/product";

type TCartItemsListProps = { products: TProduct[] };

export const CartItemsSubTotalPrice = ({ products }: TCartItemsListProps) => {
  const Subtotal = products.reduce((acc, product) => {
    if (product.quantity && typeof product.quantity === "number") {
      return acc + product.price * product?.quantity;
    } else {
      return acc;
    }
  }, 0);
  const totalCheck = Subtotal + 200;
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{formatPrice(Subtotal)} L.E</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">200.00 L.E</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{formatPrice(totalCheck)} L.E</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        Check out
      </button>
    </div>
  );
};
export default CartItemsSubTotalPrice;
