import { useEffect, useState } from "react";
import S from "./NavigationBar.module.css";
import { sampleUserData } from "../../api/api";
import LoginButton from "@components/Button/LoginButton";
import { SampleUser } from "@src/type/type";

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sampleUser, setSampleUser] = useState<SampleUser>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await sampleUserData();
      setSampleUser(data);
    }
    fetchData();
  }, []);

  return (
    <nav className={S.navigationBar}>
      <section className={S.navigationBarContainer}>
        <img
          className={S.logo}
          src="/public/assets/images/logo.svg"
          alt="logo"
        />
        {sampleUser ? (
          <div className={S.profile}>
            <img
              className={S.profileImg}
              src={sampleUser.profileImageSource}
              alt=""
            />
            {!isMobile && (
              <span className="font-14-regular">{sampleUser.email}</span>
            )}
          </div>
        ) : (
          <LoginButton />
        )}
      </section>
    </nav>
  );
};

export default NavigationBar;
