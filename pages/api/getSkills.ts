// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import these to be able make request
import type { NextApiRequest, NextApiResponse } from 'next'
// import groq library from next-sanity to query
import {groq} from 'next-sanity';
// import helper function we have created from our sanity.js file 
import { sanityClient } from '../../sanity';
import { Skill} from '../../typings';

// create a query to get all social 
const query = groq`
*[_type == "skill"]
`
type Data = {
    //create a Social type array that has socials
    skills:Skill[]
}
// create an endpoint
export default async function handler (
    req:NextApiRequest,
    res:NextApiResponse<Data>
) {
    //create socials object that is array of Skill
    // be aware that you need to create type definition for the Skill
    const skills : Skill[] = await sanityClient.fetch(query);
    res.status(200).json({skills})
}