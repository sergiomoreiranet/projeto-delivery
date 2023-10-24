import React from "react";
import Styles from "./styles.module.css";
import { IconShoppingCart, IconFilter } from "../icon-family";
import { SearchInput } from "../search-input";
import { useFilter } from "../../stores";
import { OffersFilter } from "./offers-filter-dropdown";
import { LocationsFilter } from "./locations-filter-dropdown";
import { PickupFilter } from "./pickup-dropdown";

export const Navbar = () => {
  const { toggleModal } = useFilter((store) => store);

  return (
    <div className={Styles.navbar}>
      <ul className={Styles.nav}>
        <li>
          <LocationsFilter />
        </li>
        <li>
          <PickupFilter />
        </li>
        <li>
          <OffersFilter />
        </li>
      </ul>
      <SearchInput />
      <ul className={Styles.navButtons}>
        <li>
          <button className={Styles.filterButton} onClick={() => toggleModal()}>
            <IconFilter size={20} color="#ffffff" />
          </button>
        </li>
        <li>
          <button className={Styles.cartButton}>
            <IconShoppingCart size={20} color="#ffffff" />
          </button>
        </li>
      </ul>
    </div>
  );
};
