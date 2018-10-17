export const carListSort = content => {
  return content.carList.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return content.asc ? 1 : -1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return content.asc ? -1 : 1;
    }
    return 0;
  });
};
