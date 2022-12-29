import type { NextApiRequest, NextApiResponse } from "next";
import Demo from "../../../out/contracts/demo";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  async function compileDemo() {
    try {
      await Demo.compile();
      res.status(200).json({ name: "Success, the contract was compiled" });
    } catch (error: any) {
      console.log("err:", error);
      res.status(500).json({
        name: "Error, the contract could not be compiled",
      });
    }
  }

  compileDemo();
}
