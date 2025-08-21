import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import IconifyIcon from 'components/base/IconifyIcon';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const LoidAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Loid AI, your ecommerce assistant. I can help you with sales analytics, inventory management, customer insights, and more. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('sales') || lowerInput.includes('revenue')) {
      return "Based on your current data, your sales are up 18% this month with total revenue of $47,892. Your top-selling products are iPhone 12, Nike Shoes, and Camera Lens. Would you like me to analyze any specific metrics?";
    }
    
    if (lowerInput.includes('inventory') || lowerInput.includes('stock')) {
      return "Your inventory shows 23 items with low stock and 8 items out of stock. I recommend restocking Camera Lens (50 units left) and Argan Oil (25 units left) soon. Your total stock value is $284,750.";
    }
    
    if (lowerInput.includes('customer') || lowerInput.includes('users')) {
      return "You have 8,547 total customers with 247 new customers this month. Customer lifetime value is $2,847 on average. Your VIP customers contribute 40% of total revenue.";
    }
    
    if (lowerInput.includes('orders')) {
      return "You have 1,247 total orders with 89 pending orders. Order completion rate is 92.8%. Average order value is $156. Peak ordering time is between 2-4 PM.";
    }
    
    return "I can help you with sales analytics, inventory management, customer insights, order tracking, and business recommendations. What specific area would you like to explore?";
  };

  const quickActions = [
    'Show sales report',
    'Check low stock items',
    'Customer analytics',
    'Top products',
    'Revenue trends',
  ];

  return (
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12}>
        <Paper sx={{ height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column' }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            p={3}
            borderBottom={1}
            borderColor="divider"
          >
            <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
              <IconifyIcon icon="solar:chat-round-dots-bold" fontSize="h4.fontSize" />
            </Avatar>
            <Stack>
              <Typography variant="h5" fontWeight={600}>
                Loid AI Assistant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your intelligent ecommerce companion
              </Typography>
            </Stack>
          </Stack>

          <Box flex={1} p={3} sx={{ overflowY: 'auto' }}>
            <Stack spacing={3}>
              {messages.map((message) => (
                <Stack
                  key={message.id}
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                  sx={{
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  {message.sender === 'ai' && (
                    <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                      <IconifyIcon icon="solar:chat-round-dots-bold" fontSize="body1.fontSize" />
                    </Avatar>
                  )}
                  
                  <Paper
                    sx={{
                      p: 2,
                      maxWidth: '70%',
                      bgcolor: message.sender === 'user' ? 'primary.main' : 'info.main',
                      color: message.sender === 'user' ? 'white' : 'text.primary',
                    }}
                  >
                    <Typography variant="body2">
                      {message.text}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        opacity: 0.7,
                        display: 'block',
                        mt: 1,
                        color: message.sender === 'user' ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                      }}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </Typography>
                  </Paper>
                  
                  {message.sender === 'user' && (
                    <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                      <IconifyIcon icon="solar:user-bold" fontSize="body1.fontSize" />
                    </Avatar>
                  )}
                </Stack>
              ))}
            </Stack>
          </Box>

          <Stack spacing={2} p={3} borderTop={1} borderColor="divider">
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {quickActions.map((action, index) => (
                <Chip
                  key={index}
                  label={action}
                  size="small"
                  onClick={() => setInputText(action)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Stack>
            
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                fullWidth
                variant="filled"
                placeholder="Ask Loid AI anything about your ecommerce business..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                multiline
                maxRows={3}
              />
              <IconButton
                color="primary"
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
              >
                <IconifyIcon icon="solar:arrow-right-bold" />
              </IconButton>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoidAI;