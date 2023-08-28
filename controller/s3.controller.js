import AWS from "../module/aws.module";
const s3 = new AWS.S3();
const options = {
  Bucket: 'streamwap'
}

export const fetch = async (req,res)=>{
  try {
    const query = req.query;
    options.MaxKeys = query.limit ? query.limit : null;
    options.Prefix = query.folder ? query.folder : null;

    const objects = await s3.listObjects(options).promise();
    res.status(200);
    res.json({
      message: "success",
      data: objects.Contents
    })
  }
  catch(err)
  {
    res.status(424);
    res.json({
      message: "failed",
      error: err
    });
  }
}

export const fetchById = async (req,res)=>{
  const {keys} = req.query;
  const path = keys.join('/');
  options.Key = path;
  try {
    await s3.headObject(options).promise();
    options.Expires = 60;
    const url = s3.getSignedUrl('getObject',options);
    res.status(200);
    res.json({
      message: "success",
      data: url
    })
  }
  catch(err)
  {
    res.status(404);
    res.json({
      message: "failed",
      error: err
    })
  }
}

export const create = async (req,res)=>{
  res.status(200);
  res.json({
    message: "success"
  })
}

export const update = (req,res)=>{
  res.status(200);
  res.json({
    message: "success"
  })
}

export const trash = async (req,res)=>{
  const {keys} = req.query;
  const path = keys.join('/');
  options.Key = path;
  try {
    await s3.headObject(options).promise();
    await s3.deleteObject(options).promise();
    res.status(200);
    res.json({
      message: "success"
    })
  }
  catch(err)
  {
    res.status(404);
    res.json({
      message: "failed",
      error: err
    })
  }
}
