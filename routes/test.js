module.exports = (app, db) => {
    app.get("/", (req, res) => {
      console.log(`ʕ•ᴥ•ʔ \nConnected to database: ${db.databaseName}. \nRoute exports working \nʕ•ᴥ•ʔ`)
      res.send(`ʕ•ᴥ•ʔ Connected to database: ${db.databaseName}. Route exports working ʕ•ᴥ•ʔ`)
    })
}
