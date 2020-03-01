import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pole from "../img/polepole.png";
import yoga from "../img/yogayoga.png";
import gym from "../img/gymgym.png";
import fight from "../img/fight.png";
import styles from "../styles/TopCategories.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2> Top categories </h2>
        <Slider {...settings}>
          <div>
            <div className={styles.categorie}>
              <img src={gym} className={styles.categoriePhoto} />
              <span>Gym</span>
            </div>
          </div>
          <div>
            <div className={styles.categorie}>
              <img src={yoga} className={styles.categoriePhoto} />
              <span>Yoga</span>
            </div>
          </div>
          <div>
            <div className={styles.categorie}>
              <img src={fight} className={styles.categoriePhoto} />
              <span>Martial arts</span>
            </div>
          </div>
          <div>
            <div className={styles.categorie}>
              <img src={pole} className={styles.categoriePhoto} />
              <span>Pole dance</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
