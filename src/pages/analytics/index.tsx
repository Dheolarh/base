import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import AnalyticsChart from 'components/sections/dashboard/analytics/AnalyticsChart';
import ReportsChart from 'components/sections/dashboard/reports/ReportsChart';

const Analytics = () => {
  const analyticsData = [
    { id: 1, value: 60, name: 'Desktop' },
    { id: 2, value: 35, name: 'Mobile' },
    { id: 3, value: 25, name: 'Tablet' },
    { id: 4, value: 20, name: '' },
  ];

  const salesData = [45000, 52000, 48000, 61000, 55000, 67000, 59000, 72000, 68000, 75000, 82000];

  const stats = [
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.5%',
      icon: 'solar:target-bold',
      color: 'success.main',
    },
    {
      title: 'Avg. Order Value',
      value: '$156',
      change: '+$12',
      icon: 'solar:dollar-minimalistic-bold',
      color: 'primary.main',
    },
    {
      title: 'Cart Abandonment',
      value: '68.5%',
      change: '-2.1%',
      icon: 'solar:cart-cross-bold',
      color: 'warning.main',
    },
    {
      title: 'Return Rate',
      value: '2.8%',
      change: '-0.3%',
      icon: 'solar:refresh-bold',
      color: 'error.main',
    },
  ];

  return (
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight={600} mb={3}>
          Analytics Dashboard
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3.75}>
          {stats.map((stat, index) => (
            <Grid item key={index} xs={12} sm={6} lg={3}>
              <Paper>
                <Stack spacing={2} alignItems="center">
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    height={50}
                    width={50}
                    bgcolor="transparent.primary.main"
                    borderRadius="50%"
                  >
                    <IconifyIcon icon={stat.icon} fontSize="h5.fontSize" color={stat.color} />
                  </Stack>
                  
                  <Stack alignItems="center" spacing={0.5}>
                    <Typography variant="h5" color="text.primary" fontWeight={700}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      color={stat.change.startsWith('+') || stat.change.startsWith('-') && !stat.change.includes('%') ? 'success.main' : 'error.main'}
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
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper sx={{ height: 400 }}>
          <Typography variant="h6" color="text.secondary" mb={2}>
            Sales Trend
          </Typography>
          <ReportsChart
            data={salesData}
            sx={{ height: '320px !important' }}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ height: 400 }}>
          <Typography variant="h6" color="text.secondary" mb={2}>
            Traffic Sources
          </Typography>
          <AnalyticsChart 
            data={analyticsData} 
            sx={{ height: '320px !important' }} 
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6" color="text.secondary" mb={3}>
            Key Performance Indicators
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Customer Metrics
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Customer Acquisition Cost</Typography>
                    <Typography variant="body2" fontWeight={600}>$24.50</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Customer Lifetime Value</Typography>
                    <Typography variant="body2" fontWeight={600}>$2,847</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Repeat Purchase Rate</Typography>
                    <Typography variant="body2" fontWeight={600}>34.2%</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Sales Metrics
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Monthly Recurring Revenue</Typography>
                    <Typography variant="body2" fontWeight={600}>$47,892</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Gross Profit Margin</Typography>
                    <Typography variant="body2" fontWeight={600}>42.8%</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Average Session Duration</Typography>
                    <Typography variant="body2" fontWeight={600}>4m 32s</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Analytics;