const main = {
    index: (req, res) => {
      res.render('index');  
    },
    test:(req,res) =>{
      res.render('test');
    }
  };
  module.exports = main;  