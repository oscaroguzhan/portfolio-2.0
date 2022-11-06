// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import these to be able make request
import type { NextApiRequest, NextApiResponse } from "next";
// import groq library from next-sanity to query
import { groq } from "next-sanity";
// import helper function we have created from our sanity.js file
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

// create a query to get all projects
/* ! be aware that we have reference Technologies in Project so we need to add expand that in our query like 
    *[_type == "project"] {
  ...,
  technologies[]->
}
so we get technology _type property as reference
*/

const query = groq`
[_type == "project"] {
    ...,
    technologies[]->
  }
`;
type Data = {
  //create a Project type array that has projects
  projects: Project[];
};
// create an endpoint
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //create projects object that is array of Project
  // be aware that you need to create type definition for the Project
  
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
