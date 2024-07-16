import React from "react";
import "@/styles/team.scss";
import TeamHero from "./_components/TeamHero";
import NeedAssistance from "@/components/NeedAssistance";
import Team from "./_components/Team";

export const metadata = {
  title: "Our team",
  description:
    "Meet our digital production team. Learn who stands behind the brilliant digital artwork and creates stunning videos, engaging animations, and effective UI/UX designs for you!",
  openGraph: {
    title: "Our team",
    description:
      "Meet our digital production team. Learn who stands behind the brilliant digital artwork and creates stunning videos, engaging animations, and effective UI/UX designs for you!",
    //images: "https://vancantgroup.com/images/meta.png",
  },
};

const TeamPage = () => {
  return (
    <>
      <TeamHero />
      <Team />
      <NeedAssistance />
    </>
  );
};

export default TeamPage;
