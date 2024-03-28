import { Footer, Headers } from "../components";
import {
  MainTitleDetailPostPage,
  MenuBottomDetailPost,
  RelatedPostsDetailPostPage,
} from "./../sections";
import mainImage from "../assets/images/img1.webp";
import secondaryImage from "../assets/images/img4.jpeg";

export const DetailPost = () => {
  return (
    <>
      <Headers />
      <div>
        <MainTitleDetailPostPage />

        <img className="mt-6 rounded-xl" src={mainImage} alt="" />

        <section className="mb-5">
          <article>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              reprehenderit qui illum debitis odio nam consequuntur. Quisquam
              aspernatur commodi est molestiae nostrum excepturi sint eius?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              reprehenderit qui illum debitis odio nam consequuntur. Quisquam
              aspernatur commodi est molestiae nostrum excepturi sint eius?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              non esse, quidem iusto aliquid officia repellendus labore
              inventore blanditiis illo?
            </p>

            <img className="rounded-xl" src={secondaryImage} alt="" />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              reprehenderit qui illum debitis odio nam consequuntur. Quisquam
              aspernatur commodi est molestiae nostrum excepturi sint eius?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              reprehenderit qui illum debitis odio nam consequuntur. Quisquam
              aspernatur commodi est molestiae nostrum excepturi sint eius?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              non esse, quidem iusto aliquid officia repellendus labore
              inventore blanditiis illo?
            </p>

            <MenuBottomDetailPost />
          </article>
        </section>
        <hr className=" bg-slate-500" />
        <section className="mt-5 mb-6">
          <RelatedPostsDetailPostPage />
        </section>
      </div>
      <Footer />
    </>
  );
};
