import { useQuery } from "react-query";
import { request } from "../utils/axios-utils";

function fetchCategory() {
  return request({ url: "/Category" });
}

function useCategory() {
  return useQuery("category", fetchCategory);
}
export default useCategory;
