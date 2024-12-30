import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import actGetCategories from "@store/categories/act/actGeCategories";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
const Categories = () => {
  const dispatch = useAppDispatch();
  
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  
  return (
    <>
    <Heading>home / <span className="text-primary">categories</span></Heading>
    <Loading status={loading} error={error}>
      <GridList records={records} renderItems={(record) => <Category {...record} key={record.id} />}/>
    </Loading>
    </>
  );
};

export default Categories;
