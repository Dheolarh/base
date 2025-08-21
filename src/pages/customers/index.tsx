import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomersTable from './CustomersTable';
import CustomerStats from './CustomerStats';

const Customers = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12}>
        <CustomerStats />
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
              Customer Management
            </Typography>
            
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                variant="filled"
                size="small"
                placeholder="Search customers..."
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
              <Button
                variant="contained"
                startIcon={<IconifyIcon icon="solar:user-plus-bold" />}
                sx={{ whiteSpace: 'nowrap' }}
              >
                Add Customer
              </Button>
            </Stack>
          </Stack>
          
          <CustomersTable searchText={searchText} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Customers;