import { useEffect, useState } from "react";

// material-ui
import Grid from "@mui/material/Grid";

// project imports
// import CardLoader from './CardLoader';

// assets
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

// ==============================|| DEFAULT DASHBOARD ||============================== //

const MainLayout = () => {
  const gridSpacing = 1;
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [jobStatus, setJobStatus] = useState([]);
  const [chartData, setChartdata] = useState([]);

  const getJobStatus = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/prefect/api/flow_job_history/`
      );
      let data = response?.data;
      console.log(data);
      setJobStatus(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getSourceData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/prefect/api/flow_run_seven_days`
      );
      let data = response?.data;
      console.log(data);
      setChartdata(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobStatus();
    getSourceData();
    const interval = setInterval(() => {
      getJobStatus();
      getSourceData();
    }, 1000000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
        
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>

          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>

            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
  );
};

export default MainLayout;
