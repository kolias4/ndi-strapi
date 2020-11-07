const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fetch = require('node-fetch');

module.exports = {
  // GET /hello
  async index(ctx) {

    var confirm_url=`http://localhost:1337/admin/renew-token`

     // const { stdout, stderr } = await exec('cd .. && cd ./gatsby-site && gatsby build && gatsby serve -p 3000');
     // ctx.send(stdout);
     // ctx.send("heloo")
     // console.log(ctx.request.body,"body")

     console.log(confirm_url)

     var {jwt} = JSON.parse(ctx.request.body)

     jwt = jwt && JSON.parse(jwt) + "ua"

     console.log(jwt)

     if(!jwt){
       console.log("Unauthorized")
       ctx.send("Unauthorized")
       return;
     }

     var confirm_res = await fetch(confirm_url,{
       method:"POST",
       headers: {
   'Content-Type': 'application/json'

 },
       body:JSON.stringify({"token":jwt})
     })

     if(confirm_res.ok){//an petyxe to authentication

       console.log("Success")
       // call gatsby build

       ctx.send("Starting build")

     }

     else {
       console.log('Failed authentication')
       ctx.send("Failed authentication")
     }















  }
};
