import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pole from "../../img/polepole.png";
import yoga from "../../img/yogayoga.png";
import gym from "../../img/gymgym.png";
import fight from "../../img/fight.png";
import SampleNextArrow from './RightArrow';
import SamplePrevArrow from './LeftArrow';
import styles from "../../styles/TopCategories.module.css";


export default class CenterMode extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };
      return (
        <div className={styles.topCategorieContainer}>
          <h2 className={styles.title}>Top categories</h2>
          <div className={styles.topCategories}>
            <Slider className={styles.slider} {...settings}>
              <div>
                <div className={styles.categorie}>
                  <img src={gym} className={styles.categoriePhoto} />
                  <span className={styles.categorieName}>Gym</span>
                </div>
              </div>
              <div>
                <div className={styles.categorie}>
                  <img src={yoga} className={styles.categoriePhoto} />
                  <span className={styles.categorieName}>Yoga</span>
                </div>
              </div>
              <div>
                <div className={styles.categorie}>
                  <img src={fight} className={styles.categoriePhoto} />
                  <span className={styles.categorieName}>Martial arts</span>
                </div>
              </div>
              <div>
                <div className={styles.categorie}>
                  <img src={pole} className={styles.categoriePhoto} />
                  <span className={styles.categorieName}>Pole dance</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      );
    }
  }
  

