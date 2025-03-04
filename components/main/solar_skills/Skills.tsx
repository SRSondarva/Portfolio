import React from 'react';
import SkillText from '../../sub/SkillText';
import styles from './solarSkill.module.css';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center w-full gap-3 z-10 -mt-40 px-3">
      <SkillText />
      <div className={` ${styles.container} xl:scale-[2] xl:mt-[370px] xl:mb-[490px] lg:scale-[1.5] lg:mt-[280px] lg:mb-[450px]
      md:scale-[1] md:mt-[120px] md:mb-[280px]
      sm:scale-[0.57] sm:mt-[80px] sm:mb-[120px]
      scale-[0.58] `}>
        <div className={` ${styles.sun}`}>
          <div className={styles.planetName}></div>
        </div>
        <div className={` ${styles.mercury}`}>
          <img src="../../../public/solar/gitp.png" alt="Mercury" />
          <div className={styles.planetName}></div>
        </div>
        <div className={` ${styles.venus}`}>
          <img src="../../../public/solar/fmp.png" alt="Venus" />
          <div className={styles.planetName}></div>
        </div>
        <div className={` ${styles.earth}`}>
          <img src="../../../public/solar/reactp.png" alt="Earth" />
          <div className={styles.planetName}></div>
          <div className={` ${styles.moon}`}>
            <img src="../../../public/solar/moon.png" alt="Moon" />
          </div>
        </div>
        <div className={` ${styles.mars}`}>
          <img src="../../../public/solar/tailwindp.png" alt="Mars" />
          <div className={styles.planetName}></div>
        </div>
        <div className={` ${styles.jupiter}`}>
          <img src="../../../public/solar/fbp.png" alt="Jupiter" />
          <div className={styles.planetName}></div>
        </div>
        <div className={` ${styles.saturn}`}>
          <img src="../../../public/solar/tsp.png" alt="Saturn" />
          <div className={styles.planetName}></div>
        </div>
        <div className={` ${styles.uranus}`}>
          <img src="../../../public/solar/vitep.png" alt="Uranus" />
          <div className={styles.planetName}></div>
        </div>
        <div className={` ${styles.neptune}`}>
          <img src="../../../public/solar/figmap.png" alt="Neptune" />
          <div className={styles.planetName}></div>
        </div>
        <div className={` ${styles.pluto}`}>
          <img src="../../../public/solar/nextp.png" alt="Pluto" />
          <div className={styles.planetName}></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
