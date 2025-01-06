
import { FaShoppingBag } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import HeaderCounter from "../HeaderCounter";
import useHeaderRightBar from "@hooks/useHeaderRightBar";

const HeaderRightBar = () => {
   const {totalWishlist, totalCart} = useHeaderRightBar();
    return (
        <>
            <HeaderCounter page="/wishlist" totalQuantity={totalWishlist} svgIcon={<LuClipboardList className="text-primary text-[30px] md:text-[40px]" />} />
            <HeaderCounter page="/cart" totalQuantity={totalCart} svgIcon={<FaShoppingBag className="text-primary text-[28.5px] md:text-[38.5px]" />} />
        </>
    )
}

export default HeaderRightBar