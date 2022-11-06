// create a utility function to pull information easily into frontend
import { PageInfo } from "../typings";

// async function to call to backend
export const fetchPageInfo = async () => {
  //dynamic url
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
  const data = await res.json();
  //type checking
  const pageInfo: PageInfo = data.pageInfo;

  //check the fetch data
  //console.log("fetching", pageInfo);
  return pageInfo;
};
