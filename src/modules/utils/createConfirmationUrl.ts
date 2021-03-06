import { redis } from "../../redis";
import { v4 } from "uuid";
import { confirmationPrefix } from "../constants/redisPrefixes";

export const createConfirmationUrl = async (id: number) => {
  const token = v4();
  await redis.set(confirmationPrefix + token, id, "ex", 60 * 60 * 24);

  return `http://localhost:3000/user/confirm/${token}`;
};
