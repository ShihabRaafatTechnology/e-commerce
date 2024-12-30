import { TotalQuantityShop } from "@store/cart/selectors";
import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const IconShoppingBag = () => {
  const [animate, setAnimate] = useState(false);
  const totalItems = useAppSelector(TotalQuantityShop);
  const navigate = useNavigate();
  useEffect(() => {
    if (!totalItems) return;
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  }, [totalItems]);
  return (
    <div className="relative cursor-pointer" onClick={()=> navigate("/cart")}>
      <FaShoppingBag className="text-primary text-[28.5px] md:text-[38.5px]" />
      {totalItems > 0 && <div
        className={
          animate
            ? "animate-ping absolute backdrop-blur-lg rounded-full w-1 h-1 text-xs md:w-5 md:h-5 top-[-10px] right-[-12px] p-3 flex justify-center items-center text-secondary"
            : "absolute backdrop-blur-lg rounded-full w-1 h-1 text-xs md:w-5 md:h-5 top-[-10px] right-[-12px] p-3 flex justify-center items-center text-secondary"
        }
      >
        {totalItems}
      </div>}
    </div>
  );
};

export default IconShoppingBag;
