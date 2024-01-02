import Modal from "./modal"
import { useCallback, useState } from "react";

export default function ProductBrand() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProductBrand = useCallback(async () => {
      const response = await fetch("https://dummyjson.com/products/1");
      const product = await response.json();
      return product.brand;
    }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal} disabled={isModalOpen === true}>
        Open Modal
      </button>
      {isModalOpen && (
        <Modal getProductBrand={getProductBrand} onClose={handleClose} />
      )}
    </>
  );
}
