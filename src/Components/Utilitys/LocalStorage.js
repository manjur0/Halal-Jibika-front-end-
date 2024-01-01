const getStoredJobApplication = () => {
  const storedJob = localStorage.getItem("jobApplyed");
  if (storedJob) {
    return JSON.parse(storedJob);
  }
  return [];
};

const setJobApplication = (id) => {
  const savedJobApplications = getStoredJobApplication();
  const exists = savedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    savedJobApplications.push(id);
    localStorage.setItem("jobApplyed", JSON.stringify(savedJobApplications));
  }
};
export { getStoredJobApplication, setJobApplication };
