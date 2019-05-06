import { send } from "micro";
import { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    send(res, 200, "HELLO");
  } catch (error) {
    send(res, 400, error);
  }
};
