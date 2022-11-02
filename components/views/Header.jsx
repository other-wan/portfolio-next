import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Close from "assets/icon-close.svg";
import Open from "assets/icon-hamburger.svg";
import { NAV_ITEMS } from "providers/navList";
import ListManager from "components/ListManager";
import headerStyles from "styles/header.module.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleState = () => setActive((prev) => !prev);

  return (
    <header className={headerStyles.header}>
      <div className="flex__bc">
        <Link href="/" className="headerMd">
          _wAn
        </Link>

        <button
          className={[
            headerStyles.btn__toggle,
            active ? headerStyles.active : "",
          ].join(" ")}
          onClick={toggleState}
        >
          <Image
            className={headerStyles.open}
            src={Open}
            alt="Open"
            width="22"
            height="18"
          />
          <Image
            className={headerStyles.close}
            src={Close}
            alt="Close"
            width="18"
            height="18"
          />
        </button>
      </div>

      <nav
        className={[
          // 'flex__cc',
          headerStyles.navbar,
          active ? headerStyles.active : "",
        ].join(" ")}
      >
        <ListManager
          data={NAV_ITEMS}
          renderer={(item, index) => (
            <Link id={item.name} href={item.route}>
              <span>{"0" + index}</span>&#46;&nbsp;
              {item.name}
            </Link>
          )}
          className={{
            list: headerStyles.nav__list,
            item: headerStyles.nav__item,
          }}
        />
      </nav>
    </header>
  );
};

export default Header;
