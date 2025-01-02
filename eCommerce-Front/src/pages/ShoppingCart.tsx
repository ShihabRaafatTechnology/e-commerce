import { Heading } from "@components/common";
import { CartItemsList, CartItemsSubTotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useShoppingCart from "@hooks/useShoppingCart";


const ShoppingCart = () => {
  const { products, loading, error } = useShoppingCart();
  return (
    <>
      <Heading title={`home / ${<span className="text-primary">cart</span>}`} />
      <div className="pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="justify-center md:flex md:space-x-6 xl:px-0">
          <Loading status={loading} error={error}>
            {products.length ? (
              <>
                <CartItemsList products={products} />
                <CartItemsSubTotalPrice products={products} />
              </>
            ) : (
              "Your cart is empty"
            )}
          </Loading>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
