import { HeroHome } from "../sections";
import { Headers } from "./../components";
import { RecentPosts } from "./../sections";

export const HomePage = () => {
  return (
    <>
      <Headers />

      <HeroHome />

      <RecentPosts />

      <hr className="text-gray-700 m-auto h-2 mt-6 mb-6 lg:mt-10 lg:mb-10" />
    </>
  );
};
