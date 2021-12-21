import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const useModal = () => {
  const { setIsOpen } = useContext(GlobalContext);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return {
    closeModal,
    openModal,
  };
};

export default useModal;
