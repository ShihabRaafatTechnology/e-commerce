import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import actGetCategories from "@store/categories/act/actGeCategories";
import { categoriesCleanUp } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
const Categories = () => {
  const dispatch = useAppDispatch();
  
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
      dispatch(actGetCategories());
      return () => {dispatch(categoriesCleanUp());}
  }, [dispatch]);

  
  return (
    <>
    <Heading title={`home / ${<span className="text-primary">categories</span>}`}/>
    <Loading status={loading} error={error}>
      <GridList records={records} renderItems={(record) => <Category {...record} key={record.id} />}/>
    </Loading>
    </>
  );
};

export default Categories;
