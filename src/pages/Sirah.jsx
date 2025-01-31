import "./home.css";
import Header from "../Components/Header";
import Blog from "../Components/blog";
import { useState } from "react";
function Sirah() {
  const battles = [
    {
      name: "غزوة ودان (الأبواء)",
      desc: "أول غزوة، لم يشهدها قتال",
      link: "/wadan",
    },
    {
      name: "غزوة بواط",
      desc: "لاعتراض قافلة قريش، لم يشهدها قتال",
      link: "/buwat",
    },
    {
      name: "غزوة سفوان (بدر الأولى)",
      desc: "لمطاردة كرز بن جابر، لم يشهدها قتال",
      link: "/safwan",
    },
    {
      name: "غزوة العشيرة",
      desc: "لاعتراض قافلة قريش، لم يشهدها قتال",
      link: "/ashira",
    },
    {
      name: "غزوة بدر الكبرى",
      desc: "أول معركة فاصلة في الإسلام",
      link: "/badr",
    },
    {
      name: "غزوة بني قينقاع",
      desc: "لإجلاء بني قينقاع عن المدينة",
      link: "/bni-qaynuqa",
    },
    { name: "غزوة أحد", desc: "معركة صعبة على المسلمين", link: "/uhud" },
    {
      name: "غزوة حمراء الأسد",
      desc: "لمطاردة فلول قريش بعد أحد",
      link: "/hamra-al-asad",
    },
    {
      name: "غزوة بني النضير",
      desc: "لإجلاء بني النضير عن المدينة",
      link: "/bni-al-nadir",
    },
    {
      name: "غزوة ذات الرقاع",
      desc: "لقتال قبائل غطفان",
      link: "/dhat-al-riqa",
    },
    {
      name: "غزوة بدر الموعد",
      desc: "لمواجهة قريش في بدر، ولكنها لم تأت",
      link: "/badr-al-mawid",
    },
    {
      name: "غزوة دومة الجندل",
      desc: "لفرض هيبة المسلمين في المنطقة",
      link: "/domat-al-jandal",
    },
    {
      name: "غزوة الخندق (الأحزاب)",
      desc: "حصار المدينة من قبل الأحزاب",
      link: "/khandaq",
    },
    {
      name: "غزوة بني قريظة",
      desc: "لإجلاء بني قريظة عن المدينة",
      link: "/bni-qurayza",
    },
    {
      name: "غزوة بني المصطلق (المريسيع)",
      desc: "لقتال بني المصطلق",
      link: "/bni-al-mustaliq",
    },
    { name: "غزوة الحديبية", desc: "صلح الحديبية مع قريش", link: "/hudaybiya" },
    { name: "غزوة خيبر", desc: "فتح حصون خيبر", link: "/khaybar" },
    {
      name: "غزوة عمرة القضاء",
      desc: "قضاء عمرة الحديبية",
      link: "/umra-al-qada",
    },
    { name: "غزوة مؤتة", desc: "معركة كبيرة ضد الروم", link: "/muta" },
    {
      name: "فتح مكة",
      desc: "فتح مكة ودخول النبي صلى الله عليه وسلم إليها",
      link: "/fath-makkah",
    },
    { name: "غزوة حنين", desc: "معركة كبيرة بعد فتح مكة", link: "/hunayn" },
    { name: "غزوة الطائف", desc: "حصار الطائف", link: "/taif" },
    { name: "غزوة تبوك", desc: "لقتال الروم", link: "/tabuk" },
    // يمكنك إضافة المزيد من السرايا هنا بنفس التنسيق
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBatteles = battles.filter((battel) =>
    battel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <br />
      <div className="Container">
        <br />
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="ابحث عن غزوة..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="Blogs">
          {filteredBatteles.map((battel, index) => (
            <Blog
              key={index} // مفتاح فريد لكل عنصر
              img="https://modo3.com/thumbs/fit630x300/72738/1567575648/%D8%A3%D8%B3%D9%85%D8%A7%D8%A1_%D8%BA%D8%B2%D9%88%D8%A7%D8%AA_%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84_%D9%88%D9%86%D8%AA%D8%A7%D8%A6%D8%AC%D9%87%D8%A7.jpg"
              name={battel.name}
              desc={battel.desc}
              link={battel.link}
              btn="اقرء المزيد"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sirah;
