# Dataset provider

Code for minimal express application which queries MongoDB instance of BigchainDB network underlying OEHU, returning a downloadable dataset according to the parameters specified by the user.

Early work - more TBA.

### Running in local dev environment
1. `npm install --save`. </br>
2. Create `.env.js` file in root directory and set environment variables. </br>
3. Make sure you're connected either to local MongoDB, or BigchainDB Mongo instance if you have access. </br>
____

Create this cron on the server to automatically start a SSH tunnel to a bigchaindb node:

    crontab -e

    * * * * * nc -z localhost 27018 || ssh -N -L 27018:localhost:27017 root@188.166.15.225 &
____
