import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const MainLayout = ({ children, title = "WerDevs Studio Calendar", page }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={"/favicon.ico"} />
        <meta
          name="keywords"
          content="WerDevs, Studio, web, next, react, redux, javascript, yesha"
        />
        <meta
          name="description"
          content="this calendar created by Yesha to WerDevs Studio"
        />
        <meta charSet="utf-8" />
      </Head>
      <header className="header">
        <div className="header__logo">
          <Image
            className="header__img"
            src="/img/werdevs-logo.png"
            alt="logo"
            width="165"
            height="50"
          />{" "}
          {/* what happened with svg logo? */}
        </div>
        <nav className="navigation">
          <Link href={"/"}>
            <a className="navigation__link">Home</a>
          </Link>
          <Link href={"/about"}>
            <a
              className={`navigation__link ${page === "about" ? "active" : ""}`}
            >
              About us
            </a>
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
};

export default MainLayout;
