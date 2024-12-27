"use client";
import { useEffect, useState } from "react";
import { getEntriesByContentModel } from "@/src/utils/ContentfulDriver";
import { InfoSection } from "@/src/sections/InfoSection/InfoSection";
import { HelloSection } from "@/src/sections/HelloSection/HelloSection";
import { ExperienceSection } from "@/src/sections/ExperienceSection/ExpreienceSection";
import { AboutSection } from "@/src/sections/AboutSection/AboutSection";
import { CareerSection } from "@/src/sections/CareerSection/CareerSection";
import { SkillsSection } from "@/src/sections/SkillsSection/SkillsSection";
import { ContactSection } from "@/src/sections/ContactSection/ContactSection";
import {
  AboutSectionFields,
  ContentTypes,
  ExperienceSectionFields,
  ProfileSectionFields,
} from "../src/types/Contentful";
import {
  HelloSectionFields,
  HelloSection as HelloSectionResponse,
  AboutSection as AboutSectionResponse,
  CareerSection as CareerSectionResponse,
  ExperienceSection as ExperienceSectionResponse,
  ProfileSection as ProfileSectionResponse,
  Skill as SkillResponse,
  ContentfulEntry,
} from "../src/types/Contentful";
import { InfinitySpin } from "react-loader-spinner";
export default function Home() {
  const [helloSectionData, setHelloSectionData] = useState<HelloSectionFields>({
    title: "",
    description: "",
  });
  const [aboutSectionData, setAboutSectionData] = useState<AboutSectionFields>({
    title: "",
    description: "",
  });
  const [careerSectionData, setCareerSectionData] = useState<
    CareerSectionResponse[]
  >([]);
  const [experienceSectionData, setExperienceSectionData] =
    useState<ExperienceSectionFields>({
      yearsOfExperience: 0,
      completedProjects: 0,
      totalClients: 0,
    });
  const [profileSectionData, setProfileSectionData] =
    useState<ProfileSectionFields>({
      profilePicture: {
        fields: {
          file: {
            url: "",
            contentType: "",
            fileName: "",
          },
        },
      },
      socialMedia: [],
    });
  const [skillsData, setSkillsData] = useState<SkillResponse[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async function () {
      try {
        // Fetching Data from Contentful
        // Hello Section
        const helloSectionEntries: ContentfulEntry<HelloSectionResponse>[] =
          await getEntriesByContentModel(ContentTypes.HelloSection);
        setHelloSectionData(
          helloSectionEntries[0].fields as HelloSectionFields
        );

        // About Section
        const aboutSectionEntries: ContentfulEntry<AboutSectionResponse>[] =
          await getEntriesByContentModel(ContentTypes.AboutSection);
        setAboutSectionData(
          aboutSectionEntries[0].fields as AboutSectionFields
        );

        // Career Section
        const careerSectionEntries: ContentfulEntry<CareerSectionResponse>[] =
          await getEntriesByContentModel(ContentTypes.CareerSection);
        setCareerSectionData(careerSectionEntries as any);

        // Experience Section
        const experienceSectionEntries: ContentfulEntry<ExperienceSectionResponse>[] =
          await getEntriesByContentModel(ContentTypes.ExperienceSection);
        setExperienceSectionData(
          experienceSectionEntries[0].fields as ExperienceSectionFields
        );

        // Profile Section
        const profileSectionEntries: ContentfulEntry<ProfileSectionResponse>[] =
          await getEntriesByContentModel(ContentTypes.ProfileSection);
        setProfileSectionData(
          profileSectionEntries[0].fields as ProfileSectionFields
        );

        // Skills
        const skillsEntries: ContentfulEntry<SkillResponse>[] =
          await getEntriesByContentModel(ContentTypes.Skills);
        setSkillsData(skillsEntries as any);

        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <InfinitySpin width="200" color="#44AAFF" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row md:gap-10 gap-20">
      <div className="left-section md:sticky md:top-0">
        <InfoSection data={profileSectionData} />
      </div>
      <div className="right-section flex flex-col gap-5 md:gap-10 w-full">
        <HelloSection data={helloSectionData} />
        <ExperienceSection data={experienceSectionData} />
        <AboutSection data={aboutSectionData} />
        <CareerSection data={careerSectionData} />
        <SkillsSection data={skillsData} />
        {/* <ProjectSection data={projectsData} /> */}
        <ContactSection />
      </div>
    </div>
  );
}
