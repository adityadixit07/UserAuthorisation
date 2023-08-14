import "./discussion.css";
import Trending from "./BlogsComp/Trending";
import TrendingNews from "./BlogsComp/TrendingNews";
import TrendingTopics from "./BlogsComp/TrendingTopic";
import RelatedTopics from "./BlogsComp/RelatedTopics";
import LeftTrendingNews from "./BlogsComp/LeftTrendingNews";
import SearchBar from "./BlogsComp/SearchBar";
// import Carousel from "react-multi-carousel";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import "react-multi-carousel/lib/styles.css";

function BlogsArticle() {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 6,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 4,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 2,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  return (
    <>
      <div className="m-0 p-2 md:p-4 ">
        <div className="w-full flex flex-col gap-5 md:flex-row">
          {/* RIGHT SIDE */}

          <div className="w-full md:w-3/4 flex flex-col md:px-3">
            {/* <div className="w-full mt-5">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                style={{ width: "80%" }}
                itemClass="custom-curousel-services"
              >
                <div className="services mx-3">
                  <div>ecommerce application</div>
                </div>
                <div className="services mx-3">
                  <div>figma</div>
                </div>
                <div className="services mx-3">
                  <div>mobile app</div>
                </div>
                <div className="services mx-3">
                  <div>ui/ux</div>
                </div>
                <div className="services mx-3">
                  <div>ui/ux designs</div>
                </div>
                <div className="services mx-3">
                  <div>user experience research</div>
                </div>
                <div className="services mx-3">
                  <div>ui/ux</div>
                </div>
                <div className="services mx-3">
                  <div>ui/ux designs</div>
                </div>
                <div className="services mx-3">
                  <div>user experience research</div>
                </div>
              </Carousel>
            </div> */}

            {/* searchbar */}
            <div className="w-full mt-8">
              <SearchBar />
            </div>
            {/* TRENDING TOPICS */}
            <div className="w-full my-6">
              <TrendingTopics />
            </div>

            {/* TRENDING */}
            <h1 className="text-[28px] font-bold pt-3 md:p-2">Trending</h1>
            <Trending />
            <div className="w-full my-12">
              <ImageSlider className="eyeOpenInverse md:mx-5" />
            </div>

            {/* Trending News */}
            <TrendingNews />
          </div>

          {/* LEFT SIDE */}

          <div className="w-full md:w-1/4 flex mt-6 items-start flex-col gap-3 p-2 md:px-3">
            <RelatedTopics />
            <LeftTrendingNews />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsArticle;
