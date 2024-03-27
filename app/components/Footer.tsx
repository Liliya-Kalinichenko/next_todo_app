import React, { Dispatch, SetStateAction } from 'react';
import { Status } from '../types/FilterStatus';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Colors } from '../theme/colors';
import { clearCompleted, toggleAll, } from '../actions/todoActions';
import ClearCompleted from './buttons/ClearCompleted';
import { ChecklistRtl, Rule, Toc } from '@mui/icons-material';
import ToggleAll from './buttons/ToggleAll';

interface Props {
  filterParam: Status;
  onFilterChange: Dispatch<SetStateAction<Status>>;
  hasCompleted: boolean;
}

const Footer: React.FC<Props> = ({ filterParam, onFilterChange, hasCompleted }) => {
  const handleOnChange = (e: React.SyntheticEvent, newParam: Status) => {
    onFilterChange(newParam);
  }

  const handleClearCompleted = async () => {
    await clearCompleted();
  };

  const handleToggleAll = async () => {
    await toggleAll();
  };

  return (
    <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '100%', 
        borderTop: `1px solid ${Colors.primary}`,
        paddingInline: '20px',
      }}
    >
      <ToggleAll onClick={handleToggleAll} />
      <BottomNavigation 
        showLabels={true} 
        value={filterParam} 
        onChange={handleOnChange}
        sx={{justifyContent: 'space-between'}}
      > 
        <BottomNavigationAction value={Status.All} label="All" icon={<Rule/>} />
        <BottomNavigationAction value={Status.Active} label="Active" icon={<Toc />}/>
        <BottomNavigationAction value={Status.Completed} label="Completed" icon={<ChecklistRtl />}/>
      </BottomNavigation>

      <div className={hasCompleted ? '' : 'hide'}>
        <ClearCompleted onClick={handleClearCompleted} />
      </div>
    </Box>
  );
};

export default Footer;
