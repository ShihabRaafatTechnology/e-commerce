import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlist, wishlistCleanUp } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";
import { shallowEqual } from "react-redux";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { productsFullInfo } = useAppSelector((state) => state.wishlist);

  const cartItems = useAppSelector((state) => state.cart.items, shallowEqual);
  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(wishlistCleanUp());
    };
  }, [dispatch]);

  const records = productsFullInfo.map((item) => ({
    ...item,
    quantity: item.id ? cartItems[item.id] ?? 0 : 0,
    isLiked: true,
  }));

  return (
    <>
      <Heading title={`home / ${<span className="text-primary">wishlist</span>}`} />
      <GridList
        records={records}
        renderItems={(record) => <Product {...record} key={record.id} />}
      />
    </>
  );
};

export default Wishlist;
