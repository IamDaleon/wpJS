const axios = require('axios');
let urls = ['gogona.com','flowtech.local']

// Get WordPress & PHP version
axios.get(`http://${urls[1]}`)
  .then(response => {
    const siteData = response.headers;
    let server = siteData.server.split("/");
    let siteData2 = response.headers['x-powered-by'];
    console.log(`Server: ${server[0].toUpperCase()} with version ${server[1]}`);
    console.log('WordPress version:', siteData2);
    console.log('WordPress version:', siteData);
  })

// Gets the current Plugins
// axios.get('http://flowtech.local/wp-json/wp/v2/plugins')
//   .then(response => {
//     const plugins = response.data;
//     console.log('Installed plugins:', plugins);
//   })
  // .catch(error => console.log(response.data.message));