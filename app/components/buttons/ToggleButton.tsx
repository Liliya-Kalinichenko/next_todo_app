import React from 'react'

import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Checkbox } from '@mui/material';

interface Props {
  onClick: () => void;
  isCompleted: boolean;
}

const ToggleButton: React.FC<Props> = ({ onClick, isCompleted }) => {
  return (
    <Checkbox
      edge="start"
      checked={isCompleted}
      checkedIcon={<CheckCircleTwoToneIcon />}
      icon={<CircleOutlinedIcon />}
      disableRipple
      onChange={onClick}
    />
  )
}

export default ToggleButton
