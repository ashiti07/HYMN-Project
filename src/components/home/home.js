import React from 'react';

import lines from '../../assets/lines.svg';
import classes from './home.module.css';
import image1 from '../../assets/img1.png';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.png';
import text from '../../assets/text.svg';
import text2 from '../../assets/text2.svg';
import text3 from '../../assets/text3.svg';
import text4 from '../../assets/text4.svg';
import text5 from '../../assets/text5.svg';
import text6 from '../../assets/text6.svg';

const Home = () => {
  return (
    <div>
      <div className={classes.canvas}>
        <iframe
          title="spline"
          src="https://my.spline.design/untitled-4d46f08ccc676b97378dd51610ff637b/"
          frameBorder="0"
          width="100%"
          height="630px"
        ></iframe>
      </div>

      <section id={classes.visulization}>
        <div>
          <div className={classes.vLines} /*data-aos="fade-up"*/>
            <img src={lines} alt="lines"></img>
          </div>
          <div className={classes.image1}>
            <img src={image1} alt="iamge1" /*data-aos="fade-up"*/></img>
          </div>
          <div className={classes.text1}>
            <img src={text} alt="text" /*data-aos="fade-up"*/></img>
          </div>
          <div className={classes.text2}>
            <img src={text2} alt="text" /*data-aos="fade-up"*/></img>
          </div>
        </div>
      </section>

      <section id={classes.recomendation}>
        <div>
          <div className={classes.vLines}>
            <img src={lines} alt="lines"></img>
          </div>
          <div className={classes.image2}>
            <img src={image2} alt="iamge2"></img>
          </div>
          <div className={classes.text3}>
            <img src={text3} alt="text3"></img>
          </div>
          <div className={classes.text4}>
            <img src={text4} alt="text4"></img>
          </div>
        </div>
      </section>

      <section id={classes.generation}>
        <div>
          <div className={classes.vLines}>
            <img src={lines} alt="lines"></img>
          </div>
          <div className={classes.image3}>
            <img src={image3} alt="iamge3"></img>
          </div>
          <div className={classes.text5}>
            <img src={text5} alt="text5"></img>
          </div>
          <div className={classes.text6}>
            <img src={text6} alt="text6"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
