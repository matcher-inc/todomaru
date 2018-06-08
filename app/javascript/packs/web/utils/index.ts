export const updateArray = (array, condition, newElement) => {
  const newArray = [].concat(array);
  const idx = array.findIndex(el => {
    return Object.keys(condition).every(key => el[key] == condition[key])
  })
  if(idx == 0 || idx) newArray[idx] = newElement;
  return newArray;
}
