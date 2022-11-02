import ListManager from "components/ListManager";
import { SKILL_SET } from "providers/skillList";
import Styles from "styles/skill.module.css";

const Skill = () => {
  return (
    <>
      <p>Here are a few technologies I have been opportuned to work with:</p>
      <ListManager
        data={SKILL_SET}
        renderer={(item, index) => (
          <>
            <span>{`0${index + 1}.`}</span>&nbsp;
            <p>{item.name}</p>
          </>
        )}
        className={{
          list: Styles.skill__list,
          item: Styles.skill__item,
        }}
      />
    </>
  );
};

export default Skill;
