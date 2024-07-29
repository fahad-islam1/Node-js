module.exports= reqfilter = (req, resp, next) => {
    console.log('reqfilter');
    if (!req.query.age) {
      resp.send('Please Enter Your age');
    } else if (req.query.age < 18) {
      resp.send('You are not eliegble for this website ....You are under 18                  ');
    } else {
      next();
    }
  };