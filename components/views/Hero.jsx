import ListManager from "components/ListManager";
import Link from "next/link";
import { Socials } from "providers/IconList";

import Styles from "styles/hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={Styles.hero}>
      <div className={Styles.hero__intro}>
        <h3 className="headerXsm">Hello&nbsp;&#128515;</h3>
        <h1 className="headerXlg">
          I am
          <br />
          <span>Tahir</span>&nbsp;Ridwan
        </h1>
        <h2 className="headerLg">A Frontend web developer</h2>
        <p className="text">
          Fond of utilizing code to create website applications
        </p>
        <button className="btn__primary">Send a Message</button>
      </div>

      <ListManager
        data={Socials}
        renderer={(item, index) => <Link href={item.route}>{item.icon}</Link>}
        className={{
          list: Styles.hero__socials,
          item: "",
        }}
      />
    </section>
  );
};

export default Hero;
