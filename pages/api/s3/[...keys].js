import {
  fetchById,
  trash,
  update
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

s3Router.get(fetchById);
s3Router.put(update);
s3Router.delete(trash);

export default s3Router;
