import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ButtonList = () => {
  const btnName = [
    "All",
    "Music",
    "Tamil Cinema",
    "News",
    "Sport bikes",
    "Motovlogs",
    "Mixes",
    "Bajaj Pulsar",
    "Exhaust systems",
    "England cricket team",
    "Cricket",
    "Computer programming",
    "Anirudh Ravichander",
    "Podcasts",
    "Tamil television drama",
    "Live",
    "Filmi",
    "Game shows",
    "Recently uploaded",
  ];
  return (
    <>
      {
        <div className="flex bg-black  fixed top-20 z-10  py-6 w-full ml-auto mr-auto">
          <Swiper spaceBetween={50} slidesPerView={8} direction="horizontal">
            {btnName.map((btn, index) => (
              <SwiperSlide key={index}>
                <Button btnName={btn} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      }
    </>
  );
};

export default ButtonList;
