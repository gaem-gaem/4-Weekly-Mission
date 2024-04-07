import S from "./Shared.module.css";

import Hero from "./components/Hero/Hero";
import Card from "@components/Card/Card";

const Folder = () => {
  return (
    <div>
      <section className={S.headerContainer}>
        <Hero />
      </section>
      <main className={S.container}>
        <form>
          <input
            className={S.searchInput}
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
    </div>
  );
};

export default Folder;
