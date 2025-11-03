'use client';
import { useState } from 'react';
import { Box, Typography, Paper, Button, Select, MenuItem } from '@mui/material';
import dayjs from 'dayjs';

function WeeklySchedule() {
  const [familyMembers] = useState([]);
  const [selectedFamilyMemberIdForFilter, setSelectedFamilyMemberIdForFilter] = useState('all');

  const weekdayMap = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
  };


  //  const filteredTasks = [];
  //const getFamilyMemberNames = (members) => members?.map((m) => m.name).join(', ') || '';


  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startOfMonth = currentMonth.startOf('month');
  const endOfMonth = currentMonth.endOf('month');

  const daysInMonth = [];
  for (let date = startOfMonth; date.isBefore(endOfMonth) || date.isSame(endOfMonth); date = date.add(1, 'day')) {
    daysInMonth.push(date);
  }

  const handlePrevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));


  return (

    <Box sx={{ maxWidth: 1024, mx: 'auto', p: 2, border: 1, borderRadius: 4, mt: 8, borderColor: 'rgb(186, 206, 192)', backgroundColor: 'rgb(239, 243, 239)' }}>

      <Typography variant="h3" align="flex-start" color='rgb(73, 131, 89)'>Family Flow</Typography>
      <Typography variant="p" align="flex-start" color="rgb(70, 168, 99)">Plan your meals and activities for the week</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant='contained' color='primary' size='small'> + Add plan</Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, backgroundColor: 'rgb(255, 255, 255)', borderRadius: 2, padding: 2 }}>
        <Button variant="text" onClick={handlePrevMonth}>&lt;</Button>
        <Typography variant="h6">
          {currentMonth.format('MMMM YYYY')}
        </Typography>
        <Button variant="text" onClick={handleNextMonth}>&gt;</Button>
      </Box>


      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, mt: 2, }}>
        {Object.keys(weekdayMap).map((day) => (
          <Paper key={day} sx={{ p: 1, minHeight: 300, borderRadius: 2 }}>
            <Typography sx={{ backgroundColor: 'rgb(108, 165, 125)', color: 'white', textAlign: 'center', borderRadius: 1 }}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </Typography>


            {/* <Box sx={{ mt: 1 }}>
              {filteredTasks.map((task) => {
                const categoryColor = task.category_color || '#ccc';
                return (
                  <Paper key={task.id} sx={{ p: 1, mt: 1, backgroundColor: task.completed ? '#ddd' : categoryColor }}>
                    <Typography>{task.title}</Typography>
                    <Typography variant='body2'>{task.description}</Typography>
                    <Typography variant='caption'>{getFamilyMemberNames(task.family_members)}</Typography>
                  </Paper>
                );
              })}
            </Box>
            */}
          </Paper>
        ))}
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 2 }}>
        <Box>
          <label>Filter on family member: </label>
          <Select
            value={selectedFamilyMemberIdForFilter}
            onChange={(e) => setSelectedFamilyMemberIdForFilter(e.target.value)}
            sx={{ ml: 1 }}
          >
            <MenuItem value="all">Family members</MenuItem>
            {familyMembers.map((m) => <MenuItem key={m.id} value={m.id}>{m.name}</MenuItem>)}
          </Select>
        </Box>
      </Box>

    </Box>
  );
}

export default WeeklySchedule;
