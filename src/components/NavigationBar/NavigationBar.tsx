import S from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={S.navigationBar}>
      <img className={S.logo} src="/public/assets/logo.svg" alt="logo" />
      <div className={S.profile}>
        <img className={S.profileImg} src="" alt="" />
        <span className="font-14-regular">Codeit@codeit.com</span>
      </div>
    </nav>
  );
};

export default NavigationBar;
