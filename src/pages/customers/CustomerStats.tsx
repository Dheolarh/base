import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

const stats = [
  {
    id: 1,
    title: 'Total Customers',
    value: '8,547',
    change: '+14%',
    icon: 'solar:users-group-rounded-bold',
    color: 'primary.main',
    bgColor: 'transparent.primary.main',
  },
  {
    id: 2,
    title: 'New Customers',
    value: '247',
    change: '+22%',
    icon: 'solar:user-plus-bold',
    color: 'success.main',
    bgColor: 'transparent.success.main',
  },
  {
    id: 3,
    title: 'Active Customers',
    value: '6,892',
    change: '+8%',
    icon: 'solar:user-check-bold',
    color: 'secondary.main',
    bgColor: 'transparent.secondary.main',
  },
  {
    id: 4,
    title: 'Customer LTV',
    value: '$2,847',
    change: '+12%',
    icon: 'solar:dollar-minimalistic-bold',
    color: 'warning.main',
    bgColor: 'transparent.warning.main',
  },
];

const CustomerStats = () => {
  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid item key={stat.id} xs={12} sm={6} md={3}>
          <Paper sx={{ minHeight: 140 }}>
            <Stack spacing={3}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  height={56}
                  width={56}
                  bgcolor={stat.bgColor}
                  borderRadius="50%"
                >
                  <IconifyIcon 
                    icon={stat.icon} 
                    fontSize="h4.fontSize"
                    color={stat.color} 
                  />
                </Stack>
                
                <Stack alignItems="flex-end" spacing={0.5}>
                  <Typography 
                    variant="h4"
                    color="text.primary" 
                    fontWeight={700}
                  >
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="caption"
                    color={stat.change.startsWith('+') ? 'success.main' : 'error.main'}
                    fontWeight={600}
                  >
                    {stat.change} ↗
                  </Typography>
                </Stack>
              </Stack>
              
              <Typography 
                variant="body1"
                color="text.secondary"
                fontWeight={500}
              >
                {stat.title}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomerStats;