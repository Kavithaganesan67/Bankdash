import { Typography, Card, Box, Grid, Divider, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
   

    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
  } from "@mui/material";
  import Chart from 'react-apexcharts';
import livia from '../../assets/images/livia.png'
import marvel from '../../assets/images/marvel.png'
import Randy from '../../assets/images/Randy.png'
import chipCard from '../../assets/chipCard.png'
import Group from '../../assets/Group.svg'
import axios from 'axios';
import payment from '../../assets/payment.svg'
import paypal from "../../assets/paypal.svg"
import data from './data.json'
import clock from "../../assets/clock.svg"
const Dashboard = () => {
    const [weeklyActivity, setWeeklyActivity] = useState({
        options: {
          chart: {
            type: 'bar',
            height: 300,
          },
          
          plotOptions: {
            bar: {
                borderRadius: 10, 
                columnWidth: '40%', 
                horizontal: false,
                distributed: false, 
                barSpacing: 200, 
              },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: data.weeklyActivity.labels,
          },
          colors: ['#00C9A7', '#0058F6'],
          legend: {
            position: 'top',
          },
        },
        series: [
          {
            name: 'Deposit',
            data: data.weeklyActivity.depositData,
          },
          {
            name: 'Withdraw',
            data: data.weeklyActivity.withdrawData,
          },
        ],
      });
    
      const [expenseStatistics, setExpenseStatistics] = useState({
        options: {
          chart: {
            type: 'pie',
          
          },
          labels: data.expenseStatistics.map((item) => item.label),
          colors: ['#343C6A', '#FC7900', '#1814F3', '#FA00FF'],
          legend: {
            position: 'right',
          },
          stroke: {
            show: true,
            width: 4, // Adjust width for padding effect
            colors: '#ffffff', // Set color to white or any background color
          },
        },
        series: data.expenseStatistics.map((item) => item.value),
      });
    
      const [chartData, setChartData] = useState({
        series: [
          {
            name: "Balance History",
            data: data.balanceHistory.map((item) => item.value),
          },
        ],
        options: {
          chart: { type: 'line', height: 200 , toolbar: { show: false }, },
          stroke: { curve: 'smooth',  colors: ['#0A06F4'],},
          xaxis: { categories: data.balanceHistory.map((item) => item.month) },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              type: 'vertical',
              opacityFrom: 0.7,
              opacityTo: 0.3,
            },
          },
          colors: ['#0A06F4'],
        },
      });
      
    
      useEffect(() => {
        axios.get('/data.json')
          .then(response => {
            const balanceData = response.data.balanceHistory;
            setChartData(prevData => ({
              ...prevData,
              series: [{ name: 'Balance', data: balanceData.map(item => item.value) }],
              options: {
                ...prevData.options,
                xaxis: { categories: balanceData.map(item => item.month) },
              },
            }));
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
 
   return (
    <>
    <Typography variant='h3' sx={{ fontSize: "28px" }}>
        Dashboard
    </Typography>
    
<Box sx={{ padding: "1rem" }}>
      <Grid container spacing={3}>
        {/* My Cards Section */}
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography sx={{fontSize:"20px"}} gutterBottom>
            My Cards
          </Typography>
          <Grid container spacing={2}>
            {/* First Card */}
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  background: " transparent linear-gradient(124deg, #4C49ED 0%, #0A06F4 100%) 0% 0% no-repeat padding-box",
                  color: "#fff",
                  padding: "2.2rem",
                  borderRadius: "15px",
                }}
              >
                <Typography variant="h6" sx={{color:"white"}}>Balance</Typography>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h4" sx={{ color:"white" }}>
                  $5,756
                </Typography>
                <img src={chipCard} alt='chipcard' width={30} height={30} style={{marginTop:"-20px"}}/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <Box sx={{ mt: 4}}>
                  <Typography variant="body2" sx={{color:"#98add1"}}>CARD HOLDER</Typography>
                  <Typography variant="body1">Eddy Cusuma</Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="body2" sx={{color:"#98add1"}}>VALID THRU</Typography>
                  <Typography variant="body1">12/22</Typography>
                </Box>
                </div>
                {/* <Box sx={{ mt: 2, display: "flex", alignItems: "center" ,justifyContent:"space-between",background:"#5067e6",py:2,mixBlendMode:'normal',opacity:1}}>
                  <Typography variant="h6">3778 **** **** 1234</Typography>
                
                  <img src={Group} alt='chipcard' width={30} height={30} style={{marginTop:"-20px"}}/>
                 
                </Box> */}
                 <Box sx={{mt:5}}>
                <Divider />   
                </Box>
                <Box
        sx={{
        
         
          paddingX: "0.75rem",
          background:"#fbfbfb17 linear-gradient(180deg, #ffffff78 0%, #d2d2d270 100%) 0% 0% no-repeat padding-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "0 0 15px 15px",
          mixBlendMode:"normal",
          
       opacity:1
        }}
      >
        <Typography variant="h6" sx={{ fontSize:"20px" ,color:"white"}}>
          3778 **** **** 1234
        </Typography>
        <IconButton sx={{ color: "#fff" }}>
        <img src={Group} alt='chipcard' width={30} height={30} />
        </IconButton>
      </Box>
              </Card>
            </Grid>

            {/* Second Card */}
            <Grid item xs={12} sm={6}>
            <Card
                sx={{
                  background: "",
                  color: "#",
                  padding: "2.2rem",
                  borderRadius: "15px",
                }}
              >
                <Typography  variant="body2" sx={{color:"#98add1"}}>Balance</Typography>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h4" sx={{ color:"" }}>
                  $5,756
                </Typography>
                <img src={chipCard} alt='chipcard' width={30} height={30} style={{marginTop:"-20px"}}/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="body2" sx={{color:"#98add1"}}>CARD HOLDER</Typography>
                  <Typography variant="body1">Eddy Cusuma</Typography>
                </Box>
                <Box sx={{ mt: 4}}>
                  <Typography variant="body2" sx={{color:"#98add1"}}>VALID THRU</Typography>
                  <Typography variant="body1">12/22</Typography>
                </Box>
                </div>
                <Box sx={{mt:5}}>
                <Divider />   
                </Box>
           
                <Box
        sx={{
         mt:"0.5rem",
         
          paddingX: "0.75rem",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <Typography variant="h6"  sx={{ fontSize:"20px" }} >
          3778 **** **** 1234
        </Typography>
        <IconButton sx={{ color: "#fff" }}>
        <img src={Group} alt='chipcard' width={30} height={30} />
        </IconButton>
      </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Recent Transactions Section */}
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Typography  sx={{fontSize:"20px"}} gutterBottom>
            Recent Transactions
          </Typography>
          <Card
                sx={{
                  background: "",
                  color: "#",
                  padding: "1rem",
                  borderRadius: "15px",
                }}
              >
         
          <List>

              <ListItem disableGutters>
                <ListItemAvatar>
                <img src={payment} alt='payy' style={{marginRight:"10px"}}/>
                </ListItemAvatar>
                <ListItemText
                  primary="Deposit from my Card"
                  secondary={
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >
                      28 January 2021
                    </Typography>
                  }
                />
                <Typography
                  variant="body2"
                  sx={{color:"#FF4B4A" }}
                >
                  -$850
                </Typography>
              </ListItem>
           
          </List>
          <List>

<ListItem disableGutters>
  <ListItemAvatar>
  <img src={paypal} alt='payy' style={{marginRight:"10px"}}/>
  </ListItemAvatar>
  <ListItemText
    primary="Deposit Paypal"
    secondary={
      <Typography
        variant="body2"
        color="textSecondary"
      >
       25 January 2021
      </Typography>
    }
  />
  <Typography
    variant="body2"
    sx={{  color:"#41D4A8"}}
  >
    +$2,500
  </Typography>
</ListItem>

</List>
<List>

<ListItem disableGutters>
  <ListItemAvatar>
  <img src={clock} alt='payy' style={{marginRight:"10px"}}/>
  </ListItemAvatar>
  <ListItemText
    primary="Jemi Wilson"
    secondary={
      <Typography
        variant="body2"
        color="textSecondary"
      >
       21 January 2021
      </Typography>
    }
  />
  <Typography
    variant="body2"
    sx={{ color:"#41D4A8"}}
  >
   +$5,400
  </Typography>
</ListItem>

</List>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ padding: "1rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} sx={{p:0}}>
          <Typography  sx={{fontSize:"20px"}} gutterBottom>
            Weekly Activity
          </Typography>
          <Card
                sx={{
                  background: "",
                  color: "#",
                  padding: "1rem",
                  borderRadius: "15px",
                  height:"320px"
                }}
              >
                  <Chart options={weeklyActivity.options} series={weeklyActivity.series} type="bar" height={300} /></Card>
        
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography  sx={{fontSize:"20px"}} gutterBottom>
            Expense Statistics
          </Typography>
          <Card
                sx={{
                  
                  padding: "2rem",
                  borderRadius: "15px",
                }}
              >
              <div className="chart-container">
  <Chart 
    options={expenseStatistics.options} 
    series={expenseStatistics.series} 
    type="pie" 
    height={300} 
  />
</div>

    </Card>
        </Grid>
      </Grid>
    </Box>
  
    <Grid container spacing={3}>
    <Grid item xs={12} sm={5}>
    <Card
                sx={{
                  background: "",
                  color: "#",
                  padding: "2.2rem",
                  borderRadius: "15px",
                }}
              >
                 <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Quick Transfer</h3>
        
       
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' ,justifyContent:"space-between"}}>
         
            <div  style={{ textAlign: 'center' }}>
              <img src={livia} alt="livia" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Livia Bator</div>
              <div style={{ fontSize: '12px', color: '#6c757d' }}>CEO</div>
            </div>
            <div  style={{ textAlign: 'center' }}>
           <img src={marvel} alt="livia" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
           <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Livia Bator</div>
           <div style={{ fontSize: '12px', color: '#6c757d' }}>CEO</div>
         </div>
         <div style={{ textAlign: 'center' }}>
           <img src={Randy} alt="livia" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
           <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Livia Bator</div>
           <div style={{ fontSize: '12px', color: '#6c757d' }}>CEO</div>
         </div>
        </div>
       
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" placeholder="Write Amount" defaultValue="525.50" style={{ padding: '8px 12px', border: '1px solid #ddd', borderRadius: '20px', flexGrow: 1 }} />
          <button style={{ backgroundColor: '#3f51b5', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            Send <span style={{ marginLeft: '8px', fontSize: '16px' }}></span>
          </button>
        </div>
                </Card>
    </Grid>
    <Grid item xs={12} sm={7}>
    <Card
                sx={{
                  background: "",
                  color: "#",
                  padding: "2.2rem",
                  borderRadius: "15px",
                }}
              >
                 <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Balance History</h3>
                 <Chart options={chartData.options} series={chartData.series} type="line" height={160} />
              </Card>
   
    </Grid>
    </Grid>
     
   
 
</>
    )
}
export default Dashboard