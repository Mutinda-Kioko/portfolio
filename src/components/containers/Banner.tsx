import React from "react";
import { MAIN_COLORS } from "../../../constants/colors";
import DotsIcon from "../icons/DotsIcon";
import HeroMain from "../icons/HeroMain";
import LogoHeroIcon from "../icons/LogoHeroIcon";

const STYLES = {
  heroText: `mb-2 font-Fira my-2 text-2xl font-bold leading-relaxed text-white md:text-3xl md:leading-snug`,
  heroProffession: `mb-2 font-Fira  text-2xl font-bold leading-relaxed text-[${MAIN_COLORS.LIGHT_PURPLE.toString()}] md:text-3xl md:leading-snug`,
  subText: `mb-4 font-Fira my-2 text-sm text-[${MAIN_COLORS.LIGHT_GREY.toString()}] md:text-base`,
  button: `border border-[#C778DD] bg-transparent py-2 px-4 font-Fira text-[${MAIN_COLORS.WHITE.toString()}] shadow hover:border-transparent hover:bg-[#C778DD] hover:text-white hover:shadow-lg`,
};

function Banner() {
  return (
    <section>
      <div className=" px-22 w-screen overflow-hidden bg-[#282C33]  p-20 text-white ">
        <div className="container mx-auto my-12 flex flex-col items-center md:my-24 md:flex-row">
          <div className="flex w-full flex-col items-start justify-center p-8  lg:w-2/4 lg:px-16">
            <h2 className={STYLES.heroText}>
              Kiokokioko is a{" "}
              <span className={STYLES.heroProffession}>web designer</span> and{" "}
              <span className={STYLES.heroProffession}>
                front-end developer
              </span>
            </h2>
            <p className={STYLES.subText}>
              He crafts responsive websites where technologies meet creativity
            </p>
            <a href="#" className={STYLES.button}>
              Contact Me
            </a>
          </div>
          <div className=" ml-0 mt-10 items-center justify-center overflow-hidden p-8  md:mb-0 md:mt-0 md:ml-12 lg:w-2/4">
            <div className="flex h-48 flex-wrap content-center p-8">
              <div>
                <LogoHeroIcon className="z-0" />
                <div className="fixed bottom-0 z-10 h-4/5 w-4/5">
                  <HeroMain width="100%" />
                </div>
                <DotsIcon className="z-20" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
