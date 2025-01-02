import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface MainLProps {
  data: any;
  title: string;
  Component: React.ElementType;
}

const MainComponent: React.FC<MainLProps> = ({ data, Component, title }) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Bold' }} fontSize={28}>
          {title}
        </Typography>
        <Box>
          <ArrowBackIosIcon
            onClick={() => swiperInstance?.slidePrev()}
            sx={{ cursor: "pointer" }}
          />
          <ArrowForwardIosIcon
            onClick={() => swiperInstance?.slideNext()}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "grid" }}>
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          slidesPerView={1}
          breakpoints={{
            600: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
          }}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {data.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <Component item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MainComponent;
