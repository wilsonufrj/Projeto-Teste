import React from 'react';
import { Typography, Box } from '@mui/material';

interface TitleDescriptionProps {
  title: string;
  description: string;
  withMargin?: boolean;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({ title, description, withMargin = true }) => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 600,
          marginBottom: withMargin ? '30px' : 0,
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: '#637883',
          lineHeight: 1.8,
          marginBottom: '40px',
          fontFamily: 'var(--font)',
          width: '909px'
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default TitleDescription;