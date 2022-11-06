// create a utility function to pull information easily into frontend
import { Skill } from "../typings";

// async function to call to backend
export const fetchSkills = async () => {
  //dynamic url
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  //type checking
  const skills: Skill[] = data.skills;

  //check the fetch data
  //console.log("fetching", skills);
  return skills;
};
