import React from "react";
import SectionsHeading from "../../common/SectionsHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { TESTIMONIALS_LIST } from "../../utils/Helper";
import { Navigation, Autoplay } from "swiper/modules"; 
import { NextArrow, PrevArrow } from "../../utils/Icons";

const OurTestimonials = () => {
  return (
    <div className="max-w-[1440px] relative px-3 mx-auto py-[81px] max-xl:px-5 max-lg:py-16 max-md:py-14 max-sm:py-10">
      <div className="text-center">
        <SectionsHeading CommonHeading={"Our"} BoldHeading={"Testimonials"} />
      </div>
      <p className="text-center max-w-[490px] mt-4 max-lg:mt-2 mx-auto leading-150 font-normal text-black-bean">
        Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
        consectetur mi. Vulputate sapien a a bibendum
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: true, 
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: true, 
          },
          640: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation, Autoplay]} 
        className="mySwiper px-3 max-w-[1140px]"
      >
        {TESTIMONIALS_LIST.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-[0_0_13.9px_0_#0000001A] p-5 rounded mb-2 mx-3 mt-[62px] max-lg:mt-14 max-md:mt-10 max-sm:mt-8">
              <div className="flex gap-2">
                <img className="size-[60px]" src={item.profile} alt="profile" />
                <div className="flex flex-col">
                  <h4 className="leading-150 text-3xl max-md:text-2xl max-sm:text-xl">{item.name}</h4>
                  <h5 className="opacity-50">{item.userName}</h5>
                </div>
              </div>
              <div className="mt-6 mb-[18px]">{item.rating}</div>
              <p className="text-black-bean text-base text-font leading-150">{item.aboutPerson}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev max-xl:!hidden lg:flex justify-center items-center swiper-arrows max-h-10 min-w-10 border border-black-bean rounded-full absolute !left-[5%] !top-[68%] transform -translate-y-[50%] cursor-pointer">
        <PrevArrow />
      </div>
      <div className="swiper-button-next max-xl:!hidden lg:flex swiper-arrows max-h-10 min-w-10 border border-black-bean rounded-full text-3xl absolute !right-[5%] !top-[68%] transform -translate-y-[50%] cursor-pointer">
        <NextArrow />
      </div>
    </div>
  );
};

export default OurTestimonials;
