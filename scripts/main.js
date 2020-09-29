console.log("hello");

async function getData()
{
  const response = await fetch('zonal.csv');
  const data = await response.text();
  console.log(data);
  
  const rows = data.split('\n').slice(1);
  console.log(rows);
}

getData();