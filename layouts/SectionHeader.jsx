import Styles from "styles/section.header.module.css";

const SectionHeader = ({ id, title, component }) => {
  return (
    <section id={id} className={Styles.section__header}>
      {title && <h2 className="headerLg">{title}</h2>}
      {component}
    </section>
  );
};

export default SectionHeader;
