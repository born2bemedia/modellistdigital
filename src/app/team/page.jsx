import React from "react";
import "@/styles/team.scss";
import TeamHero from "./_components/TeamHero";
import NeedAssistance from "@/components/NeedAssistance";
import Team from "./_components/Team";

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
