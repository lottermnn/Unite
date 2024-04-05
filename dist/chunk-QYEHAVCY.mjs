import {
  BadRequest
} from "./chunk-OOWT7JGX.mjs";

// src/error-handler.ts
import { ZodError } from "zod";
var errorHandler = (error, reques, reply) => {
  const { validation, validationContext } = error;
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: `Error during validaction`,
      error: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Internal server error!" });
};

export {
  errorHandler
};
