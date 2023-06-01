exports.handler = async function(event) {
  const fs = require('fs');
  const data = JSON.parse(fs.readFileSync('data.json'));
  const dateObj = new Date();
  const time = dateObj.toISOString();
  const new_id = Object.keys(data).length;
  const { latitude, longitude } = JSON.parse(event.body);
  const new_entry = {
    "latitude": latitude,
    "longitude": longitude,
    "access": time
  };
  data[new_id] = new_entry;
  fs.writeFileSync('data.json', JSON.stringify(data));
  return {
    statusCode: 200,
    body: JSON.stringify(new_entry)
  };
}
