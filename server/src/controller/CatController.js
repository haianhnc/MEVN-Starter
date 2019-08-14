const CatModel = require('../model/CatModel');

exports.list = (req, res) => {
  CatModel.find({})
    .then(list => {
      res.send({ cats: list });
    })
    .catch(err => {
      // console.log(err);
      res.send({errCode: 404, message: err.toString()});
    });
}

exports.create = (req, res) => {
  var db = req.db;
  const name = req.body.name;
  const color = req.body.color;
  
  const newMeow = new CatModel({
    name,
    color,
  });

  newMeow.save()
    .then(() => {
      res.send({
        sucess: true,
        message: "meow has been created!",
      });
    })
    .catch(err => {
      // console.log(err);
      res.send({
        sucess: false,
        message: err.toString(),
      });
    });
}