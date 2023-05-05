const axios = require('axios');


       const username = 'Daleon';
        const password = '----';

        // Encode the username and password in Base64 format
        const encodedAuth = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    
        
        axios.get('https://gogona.com/wp-json/wp/v2/plugins', {
            headers: {
            'Authorization': `Basic ${encodedAuth}`
            }
        })
            .then(response => {
            const plugins = response.data;
            console.log('Installed plugins:', plugins);
            })
            // .catch(error => console.error(error));

// const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

// // const data = {
// //   ...
// // }

// axios.post(url, {
//   headers: {
//     'Authorization': `Basic ${token}`
//   },
// }).then(response => {
//     const siteData = response.headers;
//     let server = siteData.server.split("/");
//     let siteData2 = response.headers['x-powered-by'];
//     console.log(`Current server: ${server[0].toUpperCase()} with version ${server[1]}`);
//     console.log('WordPress version:', siteData2);
//   })