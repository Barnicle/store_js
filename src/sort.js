export function sortobj(data, type) {
  const result = data.sort(function (a, b) {
    if (type === "available") return b[type] - a[type];
    return a[type] - b[type];
  });
  return result;
}

export function sortTitle(data) {
  const result = data.sort(function (a, b) {
    const nameA = a.title.toLowerCase();
    const nameB = b.title.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return result;
}