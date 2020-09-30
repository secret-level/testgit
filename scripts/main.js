console.log("hello");

async function getData()
{
  const response = await fetch('zonal.csv');
  const data = await response.text();
  console.log(data);
  
  const rows = data.split('\n').slice(1);
  table.forEach(row =>
  {
    const columns = row.split(',');
    const year = columns[0];
    xlabels.push(year);
    const temp = columns[1];
    console.log(year, temp);
  });
  
  const ctx = document.getElementById('chart').getContext('2d');
  const xlabels = [];
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Average temperature',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
  });
}

getData();