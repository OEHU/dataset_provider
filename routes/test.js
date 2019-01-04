module.exports = (app) => {
    app.get("/", (req, res) => {
      res.send("ʕ•ᴥ•ʔ")
      console.log("routes working");
    })
}
