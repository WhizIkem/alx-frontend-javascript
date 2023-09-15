function getListStudentsIds(list) {
  if (Array.isArray(list)) {
    return list.map((student) => student.id);
  }

  return [];
}

export default getListStudentsIds;
