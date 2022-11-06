// create a utility function to pull information easily into frontend
import { Social } from "../typings";

// async function to call to backend
export const fetchSocial = async () => {
  //dynamic url
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  //type checking
  const socials: Social[] = data.socials;

  //check the fetch data
  //console.log("fetching", socials);
  return socials;
};
