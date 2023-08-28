const index = (req,res)=>{
  res.status(200);
  res.json({
    message: process.env.SECRET
  });
}

export default index;
