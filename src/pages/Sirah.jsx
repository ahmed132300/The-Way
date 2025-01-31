import "./home.css";
import Blog from "../Components/blog";
function Sirah() {
  return (
    <>
      <br />
      <div className="Container">
        <div className="Blogs">
          <Blog
            img="https://modo3.com/thumbs/fit630x300/72738/1567575648/%D8%A3%D8%B3%D9%85%D8%A7%D8%A1_%D8%BA%D8%B2%D9%88%D8%A7%D8%AA_%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84_%D9%88%D9%86%D8%AA%D8%A7%D8%A6%D8%AC%D9%87%D8%A7.jpg"
            name="غزوات النبي"
            desc="جميع غزوات النبي صلي الله عليه وسلم"
            link="/gazwa"
            btn="اقرء المزيد"
          />
        </div>
      </div>
    </>
  );
}

export default Sirah;
