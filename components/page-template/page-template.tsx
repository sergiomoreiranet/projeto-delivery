import { ReactNode } from "react";
import { PageHead, Sidebar, Navbar, FilterModal } from "../../components";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
  description?: string;
  keywords?: string;
};

export const PageTemplate = ({
  children,
  title,
  description,
  keywords,
}: Props) => {
  return (
    <>
      <PageHead title={title} description={description} keywords={keywords} />
      <FilterModal />
      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};
