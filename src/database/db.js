import mysql from "promise-mysql";
import config from "./../config.js";

export const connection = mysql.createConnection({
  host: "ls-e8f08e08fda7cd42d5abd3c90611f848b472671b.cx5u68gedbdi.us-east-1.rds.amazonaws.com",
  database: "db_encuestas",
  user: "dbmasteruser",
  password: "lalo14981",
  port: 3306,
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
