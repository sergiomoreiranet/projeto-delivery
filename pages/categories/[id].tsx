import { ReactNode } from "react";
import { Highlights, PageTemplate } from "../../components";

export type TypePageProps = {
  id: string;
  children?: ReactNode;
};

export type TypeParams = {
  params: {
    id: string;
  };
};

function Categories({ id, children }: TypePageProps) {
  return (
    <PageTemplate
      title={`${id} - Categoria de Restaurante`}
      description="Lista de restaurantes da categoria"
    >
      <Highlights title={id} />
    </PageTemplate>
  );
}

export async function getServerSideProps({ params }: TypeParams) {
  return {
    props: {
      id: params.id,
    },
  };
}

export default Categories;
