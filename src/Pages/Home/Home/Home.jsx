import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import BlogSection from "./BlogSection/BlogSection";
import Featured from "./Featured/Featured";
import Faq from "../Faq/Faq";


const Home = () => {
  

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <BlogSection></BlogSection>
      <Featured></Featured>
      <Faq></Faq>

    </div>
  );
};

export default Home;
