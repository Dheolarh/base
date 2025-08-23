import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

const stats = [
  {
    id: 1,
    title: 'Total Products',
    value: '2,847',
    change: '+12%',
    icon: 'solar:bag-4-bold',
    color: 'primary.main',
    bgColor: 'transparent.primary.main',
  },
  {
    id: 2,
    title: 'Low Stock',
    value: '23',
    change: '-5%',
    icon: 'solar:danger-triangle-bold',
    color: 'warning.main',
    bgColor: 'transparent.warning.main',
  },
  {
    id: 3,
    title: 'Out of Stock',
    value: '8',
    change: '+2%',
    icon: 'solar:close-circle-bold',
    color: 'error.main',
    bgColor: 'transparent.error.main',
  },
  {
    id: 4,
    title: 'Categories',
    value: '47',
    change: '+3%',
    icon: 'solar:folder-bold',
    color: 'secondary.main',
    bgColor: 'transparent.secondary.main',
  },
];

const ProductStats = () => {
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

export default ProductStats;