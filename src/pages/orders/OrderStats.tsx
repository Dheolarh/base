import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

const stats = [
  {
    id: 1,
    title: 'Total Orders',
    value: '1,247',
    change: '+8%',
    icon: 'solar:clipboard-list-bold',
    color: 'primary.main',
    bgColor: 'transparent.primary.main',
  },
  {
    id: 2,
    title: 'Pending Orders',
    value: '89',
    change: '+12%',
    icon: 'solar:clock-circle-bold',
    color: 'warning.main',
    bgColor: 'transparent.warning.main',
  },
  {
    id: 3,
    title: 'Completed Orders',
    value: '1,158',
    change: '+15%',
    icon: 'solar:check-circle-bold',
    color: 'success.main',
    bgColor: 'transparent.success.main',
  },
  {
    id: 4,
    title: 'Total Revenue',
    value: '$47,892',
    change: '+18%',
    icon: 'solar:dollar-minimalistic-bold',
    color: 'secondary.main',
    bgColor: 'transparent.secondary.main',
  },
];

const OrderStats = () => {
  return (
    <Grid container spacing={3.75}>
      {stats.map((stat) => (
        <Grid item key={stat.id} xs={12} sm={6} lg={3}>
          <Paper>
            <Stack spacing={2.5} alignItems="center">
              <Stack
                alignItems="center"
                justifyContent="center"
                height={60}
                width={60}
                bgcolor={stat.bgColor}
                borderRadius="50%"
              >
                <IconifyIcon icon={stat.icon} fontSize="h4.fontSize" color={stat.color} />
              </Stack>
              
              <Stack alignItems="center" spacing={0.5}>
                <Typography variant="h4" color="text.primary" fontWeight={700}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
                <Typography 
                  variant="caption" 
                  color={stat.change.startsWith('+') ? 'success.main' : 'error.main'}
                  fontWeight={600}
                >
                  {stat.change} from last month
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default OrderStats;