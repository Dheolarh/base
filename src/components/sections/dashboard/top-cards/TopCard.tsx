import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import { TopCard as TopCardDataProps } from 'data/topCardsData';

interface TopCardProps {
  data: TopCardDataProps;
}

const TopCard = ({ data }: TopCardProps) => {
  return (
    <Stack component={Paper} p={{ xs: 2, sm: 3 }} alignItems="center" spacing={{ xs: 1.5, sm: 2.5 }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        height={{ xs: 48, sm: 60 }}
        width={{ xs: 48, sm: 60 }}
        bgcolor={data.iconBg}
        borderRadius="50%"
      >
        <IconifyIcon 
          icon={data.icon} 
          fontSize={{ xs: 'h5.fontSize', sm: 'h4.fontSize' }} 
          color={data.iconColor} 
        />
      </Stack>

      <Stack alignItems="center" spacing={{ xs: 0.25, sm: 0.5 }}>
        <Typography 
          variant={{ xs: 'h6', sm: 'h5' }} 
          color="neutral.darker" 
          fontWeight={800}
          sx={{ fontSize: { xs: '1.125rem', sm: '1.375rem' } }}
        >
          {data.count}+
        </Typography>
        <Typography 
          variant={{ xs: 'caption', sm: 'body2' }} 
          color="text.secondary"
          textAlign="center"
          sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}
        >
          {data.title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TopCard;
