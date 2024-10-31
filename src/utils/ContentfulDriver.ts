import * as contentful from "contentful";
import { ContentTypeMap } from "../types/Contentful";
const client = contentful.createClient({
  accessToken: "Np_yBYIR0Q4q8nX2h6_9QFR-KW-GVmBidiItV3Ln4cI",
  space: "fhn3q1kxcfyn",
});

export const getEntryById = async (entryId: string): Promise<any> => {
  try {
    const entry = await client.getEntry(entryId);
    console.log("ENtry: ", entry);
  } catch (error) {
    console.log("Entry loading error: ", error);
  }
};

export const getEntriesByContentModel = async <T extends keyof ContentTypeMap>(
  contentTypeId: T
): Promise<contentful.Entry<ContentTypeMap[T]>[]> => {
  try {
    const entries = await client.getEntries<ContentTypeMap[T]>({
      content_type: contentTypeId,
    });
    if (entries.items.length > 0) {
      return entries.items;
    } else {
      throw new Error("Missing Entry");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
