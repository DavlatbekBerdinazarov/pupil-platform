import React, { useCallback, useContext } from "react";
import SuggestedCourses from "../components/HomePageComponenets/SuggestedCourses";
import PersonalOpportunies from "../components/HomePageComponenets/PersonalOpportunies";
import CommunityMembers from "../components/HomePageComponenets/CommunityMembers";
import Consultation from "../components/HomePageComponenets/Consultation";
import RankingTeachers from "../components/HomePageComponenets/RankingTeachers";
import Home from "../components/HomePageComponenets/Home";
import { ProjectContext } from "../layout/MainLayout";
import { jwtDecode } from "jwt-decode";

export default function HomePage() {
  let token = window.localStorage.getItem("accessToken");
  // const decode = jwtDecode(token)

  // console.log("token tekshirish", decode)

//   const accessToken = localStorage.getItem('accessToken');
// if (accessToken && new Date(accessToken.exp * 1000) < new Date()) {
//   localStorage.removeItem('accessToken');
// }
  const { setIsAuth } = useContext(ProjectContext);

  if (token) {
    setIsAuth(true);
  } else {
    setIsAuth(false);
  }

  return (
    <div className="h-full">
      <div>
        <div className=" bg-main">
          <Home />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SuggestedCourses />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <PersonalOpportunies />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <CommunityMembers />
        </div>
      </div>

      {/* OUT OF CONTAINER */}
      <div className="h-full mb-4 ">
        <Consultation />
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <RankingTeachers />
      </div>
    </div>
  );
}
