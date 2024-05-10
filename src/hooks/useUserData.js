import { useQuery, useMutation } from "react-query";
import { request } from "../utils/axios-utils";

const userType = localStorage.getItem("user_role");

function fetchUserData(user_id) {
  return request({ url: `/${userType}/${user_id}` });
}

function updateUser(user_id, newData) {
  return request({
    url: `/${userType}/${user_id}`,
    method: "Put",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newData,
  });
}

function useUserData(user_id) {
  return useQuery(["user", user_id], () => fetchUserData(user_id));
}

function useUpdateUser() {
  return useMutation(updateUser);
}

export { useUserData, useUpdateUser };
