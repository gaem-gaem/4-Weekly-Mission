import NavigationBar from "@components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import S from "./Shared.module.css";
import Card from "@components/Card/Card";
import Footer from "@components/Footer/Footer";

const Folder = () => {
  return (
    <>
      <section className={S.headerContainer}>
        <NavigationBar />
        <Hero />
      </section>
      <main>
        <form>
          <input
            className={S.input}
            type="text"
            placeholder="링크를 검색해보세요"
          />
          <img
            className={S.inputIcon}
            src="/public/assets/images/icons/search-icon.svg"
            alt="돋보기 아이콘"
          />
        </form>
        <Card />
      </main>
      <section className={S.footerContainer}>
        <Footer />
      </section>
    </>
  );
};

export default Folder;
