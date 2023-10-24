import Styles from "./filter-modal.module.css";
import { useFilter } from "../../stores";

export const FilterModal = () => {
  const { isOpen } = useFilter((store) => store.state);
  const { toggleModal } = useFilter((store) => store);

  return (
    <>
      {isOpen && (
        <div className={Styles.modal}>
          <div className={Styles.content}>Conteúdo</div>
          <div className={Styles.overlay} onClick={() => toggleModal()}></div>
        </div>
      )}
    </>
  );
};
