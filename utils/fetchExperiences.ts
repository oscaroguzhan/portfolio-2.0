// create a utility function to pull information easily into frontend
import { Experience } from "../typings";

// async function to call to backend
export const fetchExperiences = async () => {
  //dynamic url
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
  const data = await res.json();
  //type checking
  const experiences: Experience[] = data.experiences;

  //check the fetch data
  //console.log("fetching", experiences);
  return experiences;
};
