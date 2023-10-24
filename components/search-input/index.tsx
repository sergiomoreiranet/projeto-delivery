import Styles from "./styles.module.css";
import { IconSearch } from "../icon-family";

export const SearchInput = () => {
  return (
    <div className={Styles.inputSearch}>
      <IconSearch size={20} color="#000000" />
      <input placeholder="Pesquise aqui" />
    </div>
  );
};
