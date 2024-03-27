import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'
import { Todo } from '../types/Todo';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Colors } from '../theme/colors';

interface Props {
  todo: Todo;
  index: number;
}

const AnimatedItem: React.FC<Props> = ({ todo, index }) => {
  const { title, isCompleted, createdAt } = todo;

  return (
    <Box 
      sx={{
        border: `1px solid ${Colors.primary}`,
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '24px',
        width: '50%',
        padding: '24px',
        position: 'relative',
        background: Colors.backGradientSecondary,
        boxShadow: Colors.boxShadowSecondary,
      }}
    >
      <Typography variant="h4" color={Colors.secondary}>
        {`Todo №${index + 1}:`}
      </Typography>

      <Typography variant="h5" sx={{fontSize: 18}}>{title}</Typography>
      <Checkbox
        size="large"
        checked={isCompleted}
        checkedIcon={<CheckCircleTwoToneIcon />}
        icon={<CircleOutlinedIcon />}
        readOnly
        disableRipple
        sx={{
          position: 'absolute',
          pointerEvents: 'none',
          top: 0,
          right: 0,
        }}
      />
      <Box sx={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        <Typography sx={{fontSize: 18}}>Status:</Typography>
        <Typography color={isCompleted ? Colors.primary : Colors.warning}>
          {isCompleted ? 'Completed' : 'Not Completed'}
        </Typography>
      </Box>
      <Typography color={Colors.secondary} sx={{fontSize: 14}}> 
        {`Created At: ${createdAt.getDate()}/${createdAt.getMonth()+1}/${createdAt.getFullYear()} 
        @ ${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`}
      </Typography>
    </Box>
  );
};

export default AnimatedItem;
