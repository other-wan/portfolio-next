import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";
import Styles from "styles/about.module.css";

const About = () => {
  return (
    <>
      <div className={Styles.paragraphs}>
        <p>
          Hi! I&apos;m Tahir Ridwan. I&apos;m a 24 year old Nigerian who enjoys
          making visual designs come to life. I began my career as a developer
          in 2017 while pursuing a mechanical engineering undergraduate degree.
          Python was the first language I learned, and I loved using it to write
          basic command-line programs like calculators, games, and other things.{" "}
        </p>
        <p>
          Being a visual learner, I enrolled to become a frontend developer by
          learning HTML/CSS and recreating @DarkCode speed designs.
        </p>
        <p>
          Today, as a front-end developer who adores utilizing React to create
          fantastic things for the web.
        </p>
      </div>

      <button className={["btn__primary", Styles.btn__about].join(" ")}>
        Download CV
      </button>
    </>
  );
};

export default About;
