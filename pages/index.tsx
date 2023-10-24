import type { NextPage } from "next";
import { Categories, Highlights, PageTemplate, FoodsList } from "../components";

const Home: NextPage = () => {
  return (
    <PageTemplate
      title="Nibble Restaurantes"
      description="Descrição do Nibble Restaurantes"
    >
      <Categories />
      <Highlights />
      <FoodsList />
    </PageTemplate>
  );
};

export default Home;
