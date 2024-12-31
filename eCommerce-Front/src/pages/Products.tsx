import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProductsByCatPrefix from "@store/products/act/actGetProductsByCatPrefix";
import { productsCleanUp } from "@store/products/productsSlice";
import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = memo(() => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItems = useAppSelector((state) => state.wishlist.itemsId);
  
  const productsFullInfo = records.map((item) => ({
    ...item,
    quantity: item.id ? cartItems[item.id] ?? 0 : 0,
    isLiked: wishlistItems.includes(item.id ?? 0),
  }));

  useEffect(() => {
    if (params.prefix) {
      dispatch(actGetProductsByCatPrefix(params.prefix));
      return () => {dispatch(productsCleanUp())};
    }
  }, [dispatch, params]);
  console.log("fire Products");
  return (
    <>
    <Heading title={`home / categories / products / ${<span className="text-primary">{params.prefix}</span>}`}/>
    <GridList
        records={productsFullInfo}
        renderItems={(record) => <Product {...record} key={record.id} />}
      />
    </>
  );
});

export default Products;
