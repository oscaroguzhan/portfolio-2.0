// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import these to be able make request
import type { NextApiRequest, NextApiResponse } from "next";
// import groq library from next-sanity to query
import { groq } from "next-sanity";
// import helper function we have created from our sanity.js file
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

// create a query to get all projects
/* ! be aware that we have reference Technologies in Experience so we need to add expand that in our query like 
    *[_type == "experience"] {
  ...,
  technologies[]->
}
so we get technology _type property as reference
*/

const query = groq`
[_type == "experience"] {
    ...,
    technologies[]->
  }
`;
type Data = {
  //create a Experience type array that has experiences
  experiences: Experience[];
};
// create an endpoint
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //create experiences object that is array of Experience
  // be aware that you need to create type definition for the Experience

  const experiences: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
