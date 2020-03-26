# Backend Example
- Serves data of multiple users
- Protected by authorisation
- No assumption about presentation towards user / user interface

## Setup
1. Run `npm i`
2. Run `npm run setup` until inserting example users succeeds. (Probably inserting users fails the first time due to async file creation or so)
3. Run `npm start`

## Usage
| Post | http://localhost:3000/login |
| --- | --- |
| Body | { "name":"anton", "password": "1234" } |
| Response | **if successfull**: { "auth": true, "token": "sometoken"} **if failed**: { "auth": false, "token": null } |
