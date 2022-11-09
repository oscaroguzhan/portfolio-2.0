// * Create a sanity helper (Create a config file to create a client)
import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const config = {
  //? createclient function takes a object with four properties in below
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

// ? Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// we need to define another function to get images from sanity
const builder = ImageUrlBuilder(config);
export const urlFor = (source: any) => builder.image(source);
