import React from "react";
import Header from "../components/Header";
import GridLayoutBuy from "../components/GridLayoutBuy";
import SearchWordCategoryTab from "../components/SearchWordCategoryTab";
import Footer from "../components/Footer";
import "../App.css";
const Search: React.FC<{}> = () => {
  return (
    <main>
      <Header />
      <SearchWordCategoryTab />
      <GridLayoutBuy />
      <Footer />
    </main>
  );
};

export default Search;
