import { FastifyInstance } from "fastify";
import { BadRequest } from "./routes/-errors/bad-request";
import { ZodError } from "zod";

type fastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: fastifyErrorHandler = (error, reques, reply) => {
    const { validation, validationContext } = error
    if (error instanceof ZodError) {
        return reply.status(400).send({
            message: `Error during validaction`,
            error: error.flatten().fieldErrors,
        })
    }

    if (error instanceof BadRequest) {
        return reply.status(400).send({ message: error.message })
    }

    return reply.status(500).send({ message: 'Internal server error!' })
}