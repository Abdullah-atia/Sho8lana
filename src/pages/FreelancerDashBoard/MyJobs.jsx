import { useEffect, useState } from "react";
import { request } from "../../utils/axios-utils";

function MyJobs() {
    const  user_id  = localStorage.getItem("user_id");
    const [jobs,setJobs] = useState([])
      function fetchProjects() {
        return request({ url: `/Job/${user_id}` });
      }
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetchProjects();
             console.log(response)
            // setJobs(response.data.result);
          } catch (error) {
            console.error("Error fetching projects:", error);
          }
        }

        fetchData();
      }, []);
    return (
        <div>
            test
        </div>
    )
}

export default MyJobs
