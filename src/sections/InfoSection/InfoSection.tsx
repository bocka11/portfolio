import { ProfileSectionFields } from "@/src/types/Contentful";
import "../../components/InfoCard/InfoCard";
import { InfoCard } from "../../components/InfoCard/InfoCard";

export const InfoSection = (props: { data: ProfileSectionFields }) => {
  return (
    <section>
      <InfoCard data={props.data} />
    </section>
  );
};
