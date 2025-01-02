import { TotalQuantityShop } from "@store/cart/selectors";
import { useAppSelector } from "@store/hooks";
import { FaShoppingBag } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import HeaderCounter from "../HeaderCounter";

const HeaderRightBar = () => {
    const totalWishlist = useAppSelector(state => state.wishlist.itemsId.length);
    const totalCart = useAppSelector(TotalQuantityShop);
    return (
        <>
            <HeaderCounter page="/wishlist" totalQuantity={totalWishlist} svgIcon={<LuClipboardList className="text-primary text-[30px] md:text-[40px]" />} />
            <HeaderCounter page="/cart" totalQuantity={totalCart} svgIcon={<FaShoppingBag className="text-primary text-[28.5px] md:text-[38.5px]" />} />
        </>
    )
}

export default HeaderRightBar