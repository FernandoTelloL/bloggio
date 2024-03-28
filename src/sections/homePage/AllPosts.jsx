import { CardType1, Pagination } from "../../components";
import img1 from "../../assets/images/img2.webp";
import img2 from "../../assets/images/img1.webp";

export const AllPosts = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">All blog posts</h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CardType1 img={img1} />
        <CardType1 img={img2} />
        <CardType1 img={img1} />
        <CardType1 img={img2} />
        <CardType1 img={img1} />
        <CardType1 img={img2} />
      </div>
      <section>
        <Pagination />
      </section>
    </section>
  );
};
