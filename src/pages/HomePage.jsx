import { HeroHome } from "../sections";
import { Headers } from "./../components";
import { RecentPosts } from "./../sections";

export const HomePage = () => {
  return (
    <>
      <Headers />

      <HeroHome />

      <RecentPosts />
    </>
  );
};
