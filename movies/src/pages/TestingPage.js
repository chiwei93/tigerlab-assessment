import React from "react";
import { Link } from "react-router-dom";
import testingPage from "./TestingPage.module.css";

const TestingPage = () => {
  return (
    <main className={testingPage.pageContainer}>
      <h2 className={testingPage.heading}>About Us</h2>

      <p className={testingPage.subHeading}>A movie directory site</p>

      <p className={testingPage.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc
        eleifend nulla lacinia suscipit. Mauris at quam quis lorem vulputate
        egestas. Mauris sit amet leo orci. Pellentesque velit ante, imperdiet et
        posuere vel, efficitur vel velit. Quisque malesuada metus nec porta
        sollicitudin. Nulla arcu neque, vestibulum hendrerit quam vel, auctor
        porta dui. Pellentesque a turpis eu sapien suscipit auctor eget vel
        nulla. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Mauris quis ornare augue.
      </p>

      <p className={testingPage.paragraph}>
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

export default TestingPage;
