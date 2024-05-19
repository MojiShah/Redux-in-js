const axios = require('axios');
fetch('https://fakerestapi.azurewebsites.net/api/v1/Users')
.then(res => res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err));

axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users')
.then(res=>console.log('axios',res.data))
.catch(err=>console.log(err));

