module.exports = (router, Users) => {
  router.post('/signup', async (req,res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    if(result){
      console.log('New User! : ' + user);
      return res.status(200).json(user);
    }
    else {
      console.log('Signup Fail!');
      return res.status(412).send("Signup Fail");
    }
  })
  .post('/signin', async (req,res)=>{
    let user = await Users.findOne(req.body);
    if(!user){
      console.log('User Not Found!');
     return res.status(404).send("User Not Found!");
    }
    else {
      console.log('User login! : ' + user);
      await res.status(200).json(user);
    }
    //await res.status(200).json(user);
  });
  return router;
};
