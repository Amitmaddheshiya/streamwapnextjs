const loginMiddleware = (req,res)=>{
    return new Promise((resolve,reject)=>{
      const {token} = req.cookies;
      if(token === "1234")
      {
        return resolve(token);
      }
      else {
        res.status(401);
        res.json({
          message: "Unauthorized !"
        })
      }
    });
  }
  
  export default loginMiddleware;
  