import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import plainPage from "./PlainPage.module.css";

const Plainpage = ({ title, subHeading }) => {
  const { setIsHomePage } = useGlobalContext();

  useEffect(() => {
    setIsHomePage(false);
    document.querySelector("#navbar").scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className={plainPage.pageContainer}>
      <h2 className={plainPage.heading}>{title}</h2>

      <p className={plainPage.subHeading}>{subHeading}</p>

      <p className={plainPage.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc
        eleifend nulla lacinia suscipit. Mauris at quam quis lorem vulputate
        egestas. Mauris sit amet leo orci. Pellentesque velit ante, imperdiet et
        posuere vel, efficitur vel velit. Quisque malesuada metus nec porta
        sollicitudin. Nulla arcu neque, vestibulum hendrerit quam vel, auctor
        porta dui. Pellentesque a turpis eu sapien suscipit auctor eget vel
        nulla. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Mauris quis ornare augue.
      </p>

      <p className={plainPage.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc
        eleifend nulla lacinia suscipit. Mauris at quam quis lorem vulputate
        egestas. Mauris sit amet leo orci. Pellentesque velit ante, imperdiet et
        posuere vel, efficitur vel velit. Quisque malesuada metus nec porta
        sollicitudin. Nulla arcu neque, vestibulum hendrerit quam vel, auctor
        porta dui. Pellentesque a turpis eu sapien suscipit auctor eget vel
        nulla. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Mauris quis ornare augue.
      </p>
    </main>
  );
};

export default Plainpage;
