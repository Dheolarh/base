import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';

const Settings = () => {
  const [settings, setSettings] = useState({
    storeName: 'Loid Ecommerce Store',
    storeEmail: 'admin@loid.com',
    storePhone: '+1 (555) 123-4567',
    storeAddress: '123 Commerce St, Business City, BC 12345',
    currency: 'USD',
    timezone: 'UTC-5',
    emailNotifications: true,
    smsNotifications: false,
    lowStockAlerts: true,
    orderNotifications: true,
    marketingEmails: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight={600} mb={3}>
          Settings
        </Typography>
      </Grid>

      <Grid item xs={12} md={8}>
        <Stack spacing={3.75}>
          {/* Store Information */}
          <Paper>
            <Typography variant="h6" fontWeight={600} mb={3}>
              Store Information
            </Typography>
            
            <Stack spacing={3}>
              <TextField
                label="Store Name"
                value={settings.storeName}
                onChange={(e) => handleInputChange('storeName', e.target.value)}
                fullWidth
                variant="filled"
              />
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  label="Store Email"
                  type="email"
                  value={settings.storeEmail}
                  onChange={(e) => handleInputChange('storeEmail', e.target.value)}
                  fullWidth
                  variant="filled"
                />
                <TextField
                  label="Store Phone"
                  value={settings.storePhone}
                  onChange={(e) => handleInputChange('storePhone', e.target.value)}
                  fullWidth
                  variant="filled"
                />
              </Stack>
              
              <TextField
                label="Store Address"
                value={settings.storeAddress}
                onChange={(e) => handleInputChange('storeAddress', e.target.value)}
                fullWidth
                multiline
                rows={2}
                variant="filled"
              />
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  label="Default Currency"
                  value={settings.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                  fullWidth
                  variant="filled"
                />
                <TextField
                  label="Timezone"
                  value={settings.timezone}
                  onChange={(e) => handleInputChange('timezone', e.target.value)}
                  fullWidth
                  variant="filled"
                />
              </Stack>
            </Stack>
          </Paper>

          {/* Notification Settings */}
          <Paper>
            <Typography variant="h6" fontWeight={600} mb={3}>
              Notification Settings
            </Typography>
            
            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailNotifications}
                    onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
                  />
                }
                label="Email Notifications"
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.smsNotifications}
                    onChange={(e) => handleInputChange('smsNotifications', e.target.checked)}
                  />
                }
                label="SMS Notifications"
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.lowStockAlerts}
                    onChange={(e) => handleInputChange('lowStockAlerts', e.target.checked)}
                  />
                }
                label="Low Stock Alerts"
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.orderNotifications}
                    onChange={(e) => handleInputChange('orderNotifications', e.target.checked)}
                  />
                }
                label="New Order Notifications"
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.marketingEmails}
                    onChange={(e) => handleInputChange('marketingEmails', e.target.checked)}
                  />
                }
                label="Marketing Emails"
              />
            </Stack>
          </Paper>

          {/* Security Settings */}
          <Paper>
            <Typography variant="h6" fontWeight={600} mb={3}>
              Security Settings
            </Typography>
            
            <Stack spacing={3}>
              <Button
                variant="outlined"
                startIcon={<IconifyIcon icon="solar:key-bold" />}
                sx={{ alignSelf: 'flex-start' }}
              >
                Change Password
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<IconifyIcon icon="solar:shield-check-bold" />}
                sx={{ alignSelf: 'flex-start' }}
              >
                Enable Two-Factor Authentication
              </Button>
              
              <Button
                variant="outlined"
                color="error"
                startIcon={<IconifyIcon icon="solar:logout-bold" />}
                sx={{ alignSelf: 'flex-start' }}
              >
                Sign Out All Devices
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <Stack spacing={3.75}>
          {/* Profile Section */}
          <Paper>
            <Typography variant="h6" fontWeight={600} mb={3}>
              Profile
            </Typography>
            
            <Stack alignItems="center" spacing={2}>
              <Stack position="relative">
                <Avatar
                  sx={{ width: 80, height: 80, bgcolor: 'primary.main' }}
                >
                  EA
                </Avatar>
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'background.paper',
                    border: 2,
                    borderColor: 'divider',
                  }}
                >
                  <IconifyIcon icon="solar:camera-bold" fontSize="small" />
                </IconButton>
              </Stack>
              
              <Stack alignItems="center">
                <Typography variant="h6" fontWeight={600}>
                  Easin Arafat
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Store Administrator
                </Typography>
              </Stack>
              
              <Button variant="outlined" size="small">
                Edit Profile
              </Button>
            </Stack>
          </Paper>

          {/* Quick Actions */}
          <Paper>
            <Typography variant="h6" fontWeight={600} mb={3}>
              Quick Actions
            </Typography>
            
            <Stack spacing={2}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<IconifyIcon icon="solar:download-bold" />}
              >
                Export Data
              </Button>
              
              <Button
                variant="outlined"
                fullWidth
                startIcon={<IconifyIcon icon="solar:upload-bold" />}
              >
                Import Products
              </Button>
              
              <Button
                variant="outlined"
                fullWidth
                startIcon={<IconifyIcon icon="solar:refresh-bold" />}
              >
                Clear Cache
              </Button>
              
              <Divider />
              
              <Button
                variant="outlined"
                color="error"
                fullWidth
                startIcon={<IconifyIcon icon="solar:trash-bin-trash-bold" />}
              >
                Delete Store Data
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined">
            Cancel
          </Button>
          <Button variant="contained">
            Save Changes
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Settings;