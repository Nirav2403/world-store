import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
