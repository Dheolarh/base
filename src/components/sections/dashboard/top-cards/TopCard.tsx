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
    <Stack component={Paper} spacing={3} sx={{ minHeight: 140 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack
          alignItems="center"
          justifyContent="center"
          height={56}
          width={56}
          bgcolor={data.iconBg}
          borderRadius="50%"
        >
          <IconifyIcon 
            icon={data.icon} 
            fontSize="h4.fontSize"
            color={data.iconColor} 
          />
        </Stack>
        
        <Stack alignItems="flex-end" spacing={0.5}>
          <Typography 
            variant="h4"
            color="text.primary" 
            fontWeight={700}
          >
            {data.count}+
          </Typography>
          <Typography 
            variant="caption"
            color="success.main"
            fontWeight={600}
          >
            +12% ↗
          </Typography>
        </Stack>
      </Stack>
      
      <Typography 
        variant="body1"
        color="text.secondary"
        fontWeight={500}
      >
        {data.title}
      </Typography>
    </Stack>
  );
};

export default TopCard;