import { CardAllPosts } from "../../components";

export const AllPosts = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">All blog posts</h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CardAllPosts />
        <CardAllPosts />
        <CardAllPosts />
        <CardAllPosts />
        <CardAllPosts />
        <CardAllPosts />
      </div>
    </section>
  );
};
