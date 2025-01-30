import "./home.css";
import Header from "../Components/Header";
import Blog from "../Components/blog";
import Imgs from "../Components/Imgs";
function Quran() {
  let images = [
    "https://www.shutterstock.com/image-photo/holy-al-quran-written-arabic-600nw-2145394919.jpg",
   "https://www.mominoun.com/picture/2015-10/reel/56321c0ee24fe1256500255.jpg",
    "https://www.edu2ksa.com/wp-content/uploads/2019/07/%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B1%D8%A9-%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A9-%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%81%D9%82%D9%87-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A-%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A-%D8%A7%D9%84%D9%81%D8%B5%D9%84-%D8%A7%D9%84%D8%A7%D9%88%D9%84.jpg",
  ];
  return (
    <>
      <Header />
      {/* <Imgs images={images} /> */}
      <br/>
      <div className="Container">
            {/* <h1 >: تعلم </h1> */}
            <br/>
        <div className="Blogs">
          <Blog
            img="https://media.elbalad.news/2024/10/large/917/4/247.jpg"
            name=" سورة الفاتحة"
            desc={`تفسير سورة الفاتحة من كتاب الظلال`}
            link="/alfateha"
            btn="تفسير سورة الفاتحة"
          />
        </div>
      </div>
    </>
  );
}

export default Quran;
