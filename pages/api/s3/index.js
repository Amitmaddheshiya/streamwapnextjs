import {
  fetch,
  create
} from "../../../controller/s3.controller";

import nextConnect from "next-connect";

const s3Router = nextConnect({
  onNoMatch: (req,res)=>{
    res.status(405);
    res.json({
      message: "Method not found"
    })
  }
});

s3Router.get(fetch);
s3Router.post(create);

export default s3Router;
