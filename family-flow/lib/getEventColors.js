export function getEventColors(event, theme) {
  if (event.eventType === 'meal') {
    /* Om vi vill ha olika färg på lunch/dinner behövs en mealCategory: "lunch"/"dinner" i Events-objektet */
    const color = theme.palette.meal.lunch;
    return {
      backgroundColor: color,
      color: theme.palette.meal.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.meal.hover,
        color: theme.palette.activity.contrastText,
      },
    };
  }

  if (event.eventType === 'activity') {
    const color = theme.palette.activity[event.activityCategory.toLowerCase()];

    return {
      backgroundColor: color,
      color: theme.palette.activity.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.activity.hover,
        color: theme.palette.meal.contrastText,
      },
    };
  }

  return 'grey.500';
}
