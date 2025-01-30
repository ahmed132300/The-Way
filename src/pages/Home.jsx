import "./home.css";
import Header from "../Components/Header";
import Blog from "../Components/blog";
import Imgs from "../Components/Imgs";
function Home() {
  let images = [
    "https://www.shutterstock.com/image-photo/holy-al-quran-written-arabic-600nw-2145394919.jpg",
   "https://www.mominoun.com/picture/2015-10/reel/56321c0ee24fe1256500255.jpg",
    "https://www.edu2ksa.com/wp-content/uploads/2019/07/%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B1%D8%A9-%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A9-%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%81%D9%82%D9%87-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A-%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A-%D8%A7%D9%84%D9%81%D8%B5%D9%84-%D8%A7%D9%84%D8%A7%D9%88%D9%84.jpg",
  ];
  return (
    <>
      {/* <Header /> */}
      {/* <Imgs images={images} /> */}
      <br/>
      <div className="Container">
            {/* <h1 >: تعلم </h1> */}
            <br/>
        <div className="Blogs">
          <Blog
            img="https://www.shutterstock.com/image-photo/holy-al-quran-written-arabic-600nw-2145394919.jpg"
            name="تفسير القران"
            desc="جميع سور القران مفسرة جاهزة"
            link="/quran"
            btn="تفسير القران"
          />
          <Blog
            img="https://cdn.alweb.com/thumbs/alseerahalnabaweyah/article/fit604x453/1/%D9%87%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84-%D9%85%D9%86-%D9%85%D9%83%D8%A9-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9.jpg"
            name="السيرة النبوية"
            desc="سيرة النبي صلي الله عليه وسلم من ولادته الي مماته"
            link="/sirah"
            btn="السيرة النبوية"
          />
          <Blog
            img="https://www.mominoun.com/picture/2015-10/reel/56321c0ee24fe1256500255.jpg"
            name="الفقه الميسر "
            desc="جميع شروحات الفقه مع الكتب"
            link="/fiqh"
            btn="الفقه الميسر"
          />
        </div>
      </div>
      </>
  );
}

export default Home;
