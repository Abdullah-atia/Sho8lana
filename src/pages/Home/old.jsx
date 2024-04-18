import axios from "axios"
// import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../../components/Loading/Loader"
import JobItem from "../JobItem/JobItem"

function Home() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:9000/jobs");
      const fetchedJobs = response.data;
      setJobs(fetchedJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="flex justify-center gap-3">
      {loading ? (
        <Loader fullHeight />
      ) : (
        jobs.map((job) => (
          <JobItem job= {job} key = {job.id} />
        )))
}
    </div>
  )
}

export default Home
