import AWS from "aws-sdk";

const s3 = new AWS.S3({
  region: "ap-south-1",
  accessKeyId: 'AKIA6IUQB2JOMT5AMMV4',
  secretAccessKey: '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'
});

const Bucket = "streamwap";

const useS3 = (file,key=file.name)=>{
  const upload = ()=>{
    const options = {
      Bucket,
      Body: file,
      Key: key
    }
    return s3.upload(options);
  }
  return upload;
}

export default useS3;
