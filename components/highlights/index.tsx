import React from "react";
import Link from "next/link";
import { HighlightsItem } from "../highlights-item";
import { IconArrowRight } from "../icon-family";
import Styles from "./styles.module.css";
import { TypePageProps } from "./types";

export const Highlights = ({ title }: TypePageProps) => {
  const data = [
    {
      id: "1",
      name: "Burguer King",
      brandUrl: "/brands/burguer-king.svg",
      rate: 4.5,
      food: "Burguer",
      comments: 1873,
      price: 1,
      bonus: "Entrega grátis",
      distance: 4.3,
    },
    {
      id: "2",
      name: "McDonalds",
      brandUrl: "/brands/mcdonalds.svg",
      rate: 4.1,
      food: "Burguer",
      comments: 22873,
      price: 1,
      bonus: "R$ 5,00 entrega grátis",
      distance: 5.3,
    },
    {
      id: "3",
      name: "Domino’s Pizza",
      brandUrl: "/brands/dominos-pizza.svg",
      rate: 5,
      food: "Pizza",
      comments: 2761,
      price: 2,
      bonus: "Entrega grátis",
      distance: 8.3,
    },
    {
      id: "4",
      name: "Pizza Hut",
      brandUrl: "/brands/pizza-hut.svg",
      rate: 4.6,
      food: "Pizza",
      comments: 653,
      price: 1,
      bonus: "Entrega grátis",
      distance: 4.3,
    },
    {
      id: "5",
      name: "Carrows",
      brandUrl: "/brands/carrows.svg",
      rate: 4.71,
      food: "Peixe",
      comments: 91,
      price: 3,
      bonus: "Entrega grátis",
      distance: 0.3,
    },
    {
      id: "6",
      name: "KFC",
      brandUrl: "/brands/kfc.svg",
      rate: 4.4,
      food: "Frango",
      comments: 364,
      price: 1,
      bonus: "Compre 2 e ganhe 1",
      distance: 18.3,
    },
  ];
  return (
    <div className="mb-12">
      <div className={Styles.header}>
        <h2>{title ? title : "Destaques"}</h2>
        <Link href="/destaques">
          <a>
            Ver todos
            <IconArrowRight size="12" color="#5B4AA3" />
          </a>
        </Link>
      </div>
      <div className={Styles.container}>
        {data.map((item) => (
          <HighlightsItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};
