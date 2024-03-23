import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swipper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const teachers = [
  {
    id: 1,
    name: "John Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: "3 yil tajriba",
  },
  {
    id: 2,
    name: "Bob Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: "3 yil tajriba",
  },
  {
    id: 3,
    name: "Bob Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: "3 yil tajriba",
  },
  {
    id: 4,
    name: "Bob Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: "3 yil tajriba",
  },
  {
    id: 5,
    name: "Bob Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: "3 yil tajriba",
  },
  {
    id: 6,
    name: "Bob Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: "3 yil tajriba",
  },
  {
    id: 7,
    name: "Bob Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: "3 yil tajriba",
  },
];

function calculateColumnCount(screenWidth) {
    let columnCount;
    if (screenWidth > 1024) {
      columnCount = 6;
    } else if (screenWidth > 768 && screenWidth < 1024) {
      columnCount = 4;
    } else if (screenWidth <= 640) {
      columnCount = 2;
    } else {
      columnCount = 2;
    }
    return columnCount;
  }
export default function CommunityMembers() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      const columnCount = calculateColumnCount(screenWidth);
  return (
    <div className="py-12">
      <div>
        <span className="h-2 w-24 rounded-sm bg-cherry block"></span>
        <h1 className=" capitalize text-4xl font-bold text-plum my-8">
          Kamandamiz a'zolari
        </h1>
        <p className=" text-mutedtxt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          blanditiis eius.
        </p>
      </div>

      <Swiper
        slidesPerView={columnCount}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="my-12 flex flex-wrap gap-3 h-[340px]"
      >
        {teachers.map((teacher) => {
          return (
            <SwiperSlide
              key={teacher.id}
              className="h-[247px] w-[190px] rounded-xl border-[2px] border-[#EAEDEE] bg-white p-5 flex flex-col justify-center items-center gap-4"
            >
              <div className=" w-[120px] h-[120px] rounded-full">
                <img
                  className="w-full h-full rounded-full"
                  src={teacher.image}
                  alt={teacher.name}
                />
              </div>
              <div className="text-center">
                <h2 className="text-plum font-semibold">{teacher.name}</h2>
                <h2 className="text-plum font-medium">{teacher.experience}</h2>
                <p>Frontend</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}