async function getData()
{ 
  const response = await fetch('zonal.csv');
  const data = await response.text();
 
  const xs = [];
  const ys = []; 
  const table = data.split('\n').slice(1);
  table.forEach(row =>
  {
    const columns = row.split(',');
    xs.push(columns[0]);
    ys.push(columns[1]);
    console.log(columns[0], columns[1]);
  });
  return (xs, ys);
}

async function chartIt()
{
  const ctx = document.getElementById('chart').getContext('2d');
  const data = await getData();
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.xs,
      datasets: [{
        label: 'Average temperature',
        data: data.ys,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
  });
}

chartIt();