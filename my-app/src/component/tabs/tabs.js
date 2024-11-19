import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
  
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PatientDetailsTabs({patientData}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Patient Details" {...a11yProps(0)} />
          <Tab label="History" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography><strong>Name:</strong> {patientData?.fName} {patientData?.lName}</Typography>
        <Typography><strong>Gender:</strong> {patientData?.gender}</Typography>
        <Typography><strong>Date of Appointment:</strong> {patientData?.date}</Typography>
        <Typography><strong>Age:</strong> {patientData?.age}</Typography>
        <Typography><strong>Mobile:</strong> {patientData?.mobile}</Typography>
        <Typography><strong>Father's Name:</strong> {patientData?.fatherName}</Typography>
        <Typography><strong>Blood Group:</strong> {patientData?.bloodGroup}</Typography>
        <Typography><strong>Email:</strong> {patientData?.email}</Typography>
        <Typography><strong>Patient Description:</strong> {patientData?.patientDescription}</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        
      </CustomTabPanel>
    </Box>
  );
}
