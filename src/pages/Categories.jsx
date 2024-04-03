import { Footer, Headers } from "../components";
import {
  AllPostsCategories,
  HeroCategories,
  SearchCategories,
} from "../sections";

export const Categories = () => {
  return (
    <>
      <Headers />

      <HeroCategories />

      <SearchCategories />

      <AllPostsCategories />

      <Footer />
    </>
  );
};
