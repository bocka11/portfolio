import { Entry, EntrySkeletonType } from "contentful";

export enum ContentTypes {
  HelloSection = "helloSection",
  AboutSection = "aboutSection",
  CareerSection = "careerSection",
  ExperienceSection = "experienceSection",
  ProfileSection = "profileSection",
  Skills = "skills",
  Projects = "projectSection",
}

export interface HelloSectionFields {
  title: string;
  description: string;
}

export interface HelloSection {
  fields: HelloSectionFields;
  contentTypeId: string;
}

export interface AboutSectionFields {
  title: string;
  description: string;
}

export interface AboutSection {
  fields: AboutSectionFields;
  contentTypeId: string;
}

export interface ExperienceSectionFields {
  yearsOfExperience: number;
  completedProjects: number;
  totalClients: number;
}

export interface ExperienceSection {
  fields: ExperienceSectionFields;
  contentTypeId: string;
}

export interface CareerSectionFields {
  startDate: Date;
  endDate: Date;
  currentlyWorking: boolean;
  description: string;
  order: number;
}

export interface CareerSection {
  fields: CareerSectionFields;
  contentTypeId: string;
}

export interface SocialMediaFields {
  name: string;
  url: string;
}

export interface SocialMedia {
  fields: SocialMediaFields;
}

interface File {
  url: string;
  contentType: string;
  fileName: string;
}

export interface ProfilePictureFields {
  file: File;
}

export interface ProfilePicture {
  fields: ProfilePictureFields;
}

export interface ProfileSectionFields {
  profilePicture: ProfilePicture;
  socialMedia: SocialMedia[];
}

export interface ProfileSection {
  fields: ProfileSectionFields;
  contentTypeId: string;
}

export interface SkillFields {
  name: string;
  percentage: number;
  color: string;
  order: number;
}

export interface Skill {
  fields: SkillFields;
  contentTypeId: string;
}

export interface ProjectLogoField {
  file: File;
}
export interface ProjectLogo {
  fields: ProjectLogoField;
}

export interface ProjectFields {
  name: string;
  description: string;
  logo: ProjectLogo;
  order: number;
}

export interface ProjectSection {
  fields: ProjectFields;
  contentTypeId: string;
}

export type ContentTypeMap = {
  helloSection: HelloSection;
  aboutSection: AboutSection;
  experienceSection: ExperienceSection;
  careerSection: CareerSection;
  profileSection: ProfileSection;
  skills: Skill;
  projectSection: ProjectSection;
};

export interface ContentfulError {
  error: string;
}

export type ContentfulEntry<T extends EntrySkeletonType> = Entry<T>;
