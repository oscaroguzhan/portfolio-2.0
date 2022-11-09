// create a utility function to pull information easily into frontend
import { Project } from "../typings";

// async function to call to backend
export const fetchProject = async () => {
  //dynamic url
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
  const data = await res.json();
  //type checking
  const projects: Project[] = data.projects;

  //check the fetch data
  console.log("fetching", projects);
  return projects;
};
