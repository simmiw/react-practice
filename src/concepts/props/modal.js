import { useState, useCallback } from "react";

const Modal = ({ getProductBrand, onClose }) => {
    const [brandName, setBrandName] = useState("");

    const handleClick = useCallback(
        async () => {
            const brandName = await getProductBrand();
            setBrandName(brandName);
        }, [setBrandName, getProductBrand]);

    return (
        <>
            <button onClick={handleClick}>Check Product</button>
            <h2>{brandName}</h2>
            <button onClick={onClose}>Close Modal </button>
        </>
    );
};

export default Modal;
