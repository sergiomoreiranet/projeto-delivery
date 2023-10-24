import type { NextPage } from "next";
import { Highlights, PageTemplate, FoodsList } from "../components";

const Explorer: NextPage = () => {
  return (
    <PageTemplate
      title="Explorar - Categoria de Restaurante"
      description="Lista de restaurantes da categoria"
    >
      <Highlights title="Restaurantes próximos" />
      <FoodsList />
    </PageTemplate>
  );
};

export default Explorer;
