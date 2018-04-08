import * as jwt from "jsonwebtoken";
import { Prisma } from "./generated/prisma";

export interface Context {
  db: Prisma;
  request: any;
}

export function getUserId(ctx: Context) {
  if (ctx.request.session.userId) {
    return ctx.request.session.userId;
  }

  throw new AuthError();
}

export class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}
