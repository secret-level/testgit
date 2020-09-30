const xlabels = [];
const ytemps = [];

async function getData()
{
  const response = await fetch('zonal.csv');
  const data = await response.text();
  
  const table = data.split('\n').slice(1);
  table.forEach(row =>
  {
    const columns = row.split(',');
    const year = columns[0];
    xlabels.push(year);
    const temp = columns[1];
    ytemps.push(temp);
    console.log(year, temp);
  });
}

async function chartIt()
{
  await getData();
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xlabels,
      datasets: [{
        label: 'Average temperature',
        data: ytemps,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }]
    },
  });
}

chartIt();