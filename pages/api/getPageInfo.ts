// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import these to be able make request
import type { NextApiRequest, NextApiResponse } from "next";
// import groq library from next-sanity to query
import { groq } from "next-sanity";
// import helper function we have created from our sanity.js file
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

// create a query to get all pageInfo
/* ! be aware that we have reference socials in PageInfo so we need to add expand that in our query like 
    *[_type == "project"] {
  ...,
  socials[]->
}
so we get socials _type property as reference till social
*/
const query = groq`
*[_type == "pageInfo"][0]
{...,socials[]->
}
`;
type Data = {
  //create a PageInfo type array that has pageInfos
  pageInfo: PageInfo;
};
// create an endpoint
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //create pageInfos object that is array of Skill
  // be aware that you need to create type definition for the Skill
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
