/*
remove file in production
*/
module.exports = (app, db) => {
    app.get("/", (req, res) => {
      console.log(db)
      res.send("ʕ•ᴥ•ʔ")
      console.log("routes working");
    })
}
