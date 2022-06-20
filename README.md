# flora

## Project Setup 

# Backend 

- Type `mysql -u root -p` to access the MySQL CLI using your password.
1. Create the database in the MySQL CLI, type `create database flora;`
2. create `.env` file 

`DB_NAME = flora`
`DB_PASS= YOUR_PASSWORD`
`DB_HOST=127.0.0.1`

4. Run `npm install` in a new terminal

5. Run `npm start` in project directory to start the Express server on port 5000

-Run `npm run migrate` in a new terminal 

-Run `npx sequelize-cli db:seed:all`