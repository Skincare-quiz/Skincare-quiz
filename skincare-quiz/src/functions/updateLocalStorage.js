/*Using local storage to avoid returning initial state when refreshing */
export const setItem = (navigate, route) => {
  const oldValue = JSON.parse(localStorage.getItem('progress'));
  if (!oldValue) {
    /*When the user is on the first question there isn`t yet a
    stored item so the value is set to 2 when moving on the next question */
    localStorage.setItem('progress', 2);
    navigate(route);
  } else if (route === '/results') {
    /**If the user is on the last question it shouldn`t update the progress value
     * when moving to the results
     */
    navigate(route);
  } else {
    localStorage.setItem('progress', oldValue + 1);
    navigate(route);
  }
};

/*Using local storage to avoid returning initial state when refreshing */
export const removeItem = (navigate, route) => {
  const oldValue = JSON.parse(localStorage.getItem('progress'));
  console.log(oldValue, 'oldValue');
  localStorage.setItem('progress', oldValue - 1);
  navigate(route);
};
