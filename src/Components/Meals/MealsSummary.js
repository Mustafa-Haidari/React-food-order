import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, delivered to you</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delivious lunch or dinner at home.
      </p>
      <p>All our meals are cooked</p>
    </section>
  );
};

export default MealsSummary;
