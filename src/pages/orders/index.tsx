import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import OrdersTable from './OrdersTable';
import OrderStats from './OrderStats';

const Orders = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12}>
        <OrderStats />
      </Grid>
      
      <Grid item xs={12}>
        <Paper>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            mb={3}
          >
            <Typography variant="h5" color="text.primary" fontWeight={600}>
              Order Management
            </Typography>
            
            <TextField
              variant="filled"
              size="small"
              placeholder="Search orders..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{ width: 280 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconifyIcon icon="prime:search" />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          
          <OrdersTable searchText={searchText} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Orders;