import { Footer, Headers } from "../components";
import {
  Comments,
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
      <div className="mt-16">
        <MainTitleDetailPostPage />

        <img className="mt-16 mb-6 rounded-xl" src={mainImage} alt="" />

        <section className="mb-5 flex flex-col md:flex-row gap-2">
          <article className="md:w-[70%]">
            <p className="mb-3 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              reprehenderit qui illum debitis odio nam consequuntur. Quisquam
              aspernatur commodi est molestiae nostrum excepturi sint eius?
            </p>

            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              reprehenderit qui illum debitis odio nam consequuntur. Quisquam
              aspernatur commodi est molestiae nostrum excepturi sint eius?
            </p>

            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              non esse, quidem iusto aliquid officia repellendus labore
              inventore blanditiis illo?
            </p>

            <img
              className="rounded-xl mt-6 mb-6 w-[80%] mr-auto ml-auto md:mt-10 md:mb-10 md:w-[70%] "
              src={secondaryImage}
              alt=""
            />

            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              reprehenderit qui illum debitis odio nam consequuntur. Quisquam
              aspernatur commodi est molestiae nostrum excepturi sint eius?
            </p>

            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              reprehenderit qui illum debitis odio nam consequuntur. Quisquam
              aspernatur commodi est molestiae nostrum excepturi sint eius?
            </p>

            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              non esse, quidem iusto aliquid officia repellendus labore
              inventore blanditiis illo?
            </p>

            <MenuBottomDetailPost />
          </article>

          <Comments />
        </section>
        <hr className=" bg-slate-500" />
        <section className="mt-5 mb-6">
          <RelatedPostsDetailPostPage />
        </section>
      </div>

      <hr className="mb-6 bg-slate-500" />

      <Footer />
    </>
  );
};
