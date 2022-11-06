// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import these to be able make request
import type { NextApiRequest, NextApiResponse } from 'next'
// import groq library from next-sanity to query
import {groq} from 'next-sanity';
// import helper function we have created from our sanity.js file 
import { sanityClient } from '../../sanity';
import { Social } from '../../typings';

// create a query to get all social 
const query = groq`
*[_type == "social"]
`
type Data = {
    //create a Social type array that has socials
    socials:Social[]
}
// create an endpoint
export default async function handler (
    req:NextApiRequest,
    res:NextApiResponse<Data>
) {
    //create socials object that is array of Social
    // be aware that you need to create type definition for the Social
    const socials : Social[] = await sanityClient.fetch(query);
    res.status(200).json({socials})
}