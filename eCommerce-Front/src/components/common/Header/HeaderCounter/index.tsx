import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type THeaderCounter = {
    totalQuantity: number;
    page: string;
    svgIcon: React.ReactNode;
}

const HeaderCounter = ({totalQuantity, page, svgIcon}: THeaderCounter) => {
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!totalQuantity) return;
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    }, [totalQuantity]);
    return (
        <div className="relative cursor-pointer" onClick={() => navigate(page)}>
            {svgIcon}
            {totalQuantity > 0 && <div
                className={
                    animate
                        ? "animate-ping absolute backdrop-blur-lg rounded-full w-1 h-1 text-xs md:w-5 md:h-5 top-[-10px] right-[-12px] p-3 flex justify-center items-center text-secondary"
                        : "absolute backdrop-blur-lg rounded-full w-1 h-1 text-xs md:w-5 md:h-5 top-[-10px] right-[-12px] p-3 flex justify-center items-center text-secondary"
                }
            >
                {totalQuantity}
            </div>}
        </div>
    );
}

export default HeaderCounter