import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import { Container, Children } from "./styles";

type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Children>{children}</Children>
      <Footer />
    </Container>
  );
}

export default Layout;
