import { Card1 } from "../../components";

export const RecentPosts = () => {
  return (
    <section>
      <h2 className="font-Oswald font-bold mb-4 text-slate-900">
        Recent blog posts
      </h2>

      <section className={`lg:flex`}>
        <div className="md:mb-6 lg:w-[60%]">
          <Card1 wmd="48%" />
        </div>
        <div className="md:flex md:justify-between  lg:w-[40%] lg:flex lg:flex-row flex-wrap">
          <div className="md:w-[32%] lg:w-full">
            <Card1 wmd="48%" />
          </div>
          <div className="md:w-[32%] lg:w-full">
            <Card1 wmd="48%" />
          </div>
          <div className="md:w-[32%] lg:w-full">
            <Card1 wmd="48%" />
          </div>
        </div>
      </section>
    </section>
  );
};
