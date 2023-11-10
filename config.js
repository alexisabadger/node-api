const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "db4free.net",
    user: "thealexmac",
    password: "AlexMac5",
    database: "alextestdatabase",
    connectTimeout: 60000,
  },
  listPerPage: 10,
};
module.exports = config;