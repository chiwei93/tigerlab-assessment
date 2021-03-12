import React from "react";
import infoPage from "./InfoPage.module.css";

const InfoPage = ({ title, subHeading }) => {
  return (
    <div className={infoPage.pageContainer}>
      <h2 className={infoPage.heading}>{title}</h2>

      <h3 className={infoPage.headingSecondary}>{subHeading}</h3>

      <p className={infoPage.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo arcu,
        semper non neque quis, condimentum consequat orci. Nulla ullamcorper
        ornare leo, vel aliquam nulla tristique sit amet. Praesent interdum
        pellentesque felis, at tincidunt leo commodo id. Maecenas vel eros
        imperdiet, eleifend nisl ut, luctus odio. Quisque posuere diam eget
        justo viverra consectetur. Duis sed finibus metus. Integer vel sem a sem
        pharetra maximus et vitae nibh. Cras ut imperdiet eros. Donec bibendum
        aliquet elit quis sollicitudin. Sed ornare nulla non efficitur tempor.
        Phasellus sodales faucibus tortor ac porttitor. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Curabitur quis nisl in sapien rhoncus
        iaculis quis id massa. Sed eu euismod sem.
      </p>

      <p className={infoPage.paragraph}>
        Aenean ullamcorper mauris eget enim imperdiet, vitae suscipit erat
        pretium. In hac habitasse platea dictumst. Maecenas tincidunt enim sit
        amet massa congue, at pharetra arcu sodales. Curabitur sit amet
        facilisis ex. Ut magna enim, dignissim id tincidunt non, dictum id
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex
        dui, viverra ac elementum at, luctus sit amet nulla. Nunc lacinia
        aliquet risus, quis elementum odio. Donec vitae ex eget neque pretium
        hendrerit.
      </p>
    </div>
  );
};

export default InfoPage;
