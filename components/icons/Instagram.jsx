import { useEffect, useState } from "react";

const Instagram = () => {
  const [hover, setHover] = useState(false);
  const [size, setSize] = useState({ width: "20px", height: "20px" });

  const handleMouseOver = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEffect(() => {
    const handleResize = (e) => {
      if (e.target.innerWidth <= 480) {
        setSize({ width: "20px", height: "20px" });
      } else if (e.target.innerWidth <= 768) {
        setSize({ width: "24px", height: "24px" });
      } else {
        setSize({ width: "30px", height: "30px" });
      }
    };

    window.addEventListener("resize", (e) => handleResize(e));

    return window.removeEventListener("resize", (e) => handleResize(e));
  }, []);

  return (
    <svg
      fill={hover ? "#FA0C1B" : "#090A0E"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size.width}
      height={size.height}
    >
      <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z" />
    </svg>
  );
};

export default Instagram;
