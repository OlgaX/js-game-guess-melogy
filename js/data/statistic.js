export default (newData) => {

  const data = [
    {time: 20, answers: 10},
    {time: 32, answers: 10},
    {time: 44, answers: 10},
    {time: 20, answers: 8},
    {time: 50, answers: 7}
  ];

  data.push(newData);

  data.sort((a, b) => (a.answers <= b.answers));
  data.sort((a, b) => (a.answers === b.answers ? a.time >= b.time : false));

  const res = {
    place: data.indexOf(newData) + 1,
    totalPlaces: data.length
  };

  return res;
};
