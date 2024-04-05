import {
  registerForEvent
} from "./chunk-6Q4VOH63.mjs";
import {
  errorHandler
} from "./chunk-QYEHAVCY.mjs";
import {
  checkIn
} from "./chunk-Y2MB27XJ.mjs";
import {
  createEvent
} from "./chunk-HXAHCW5G.mjs";
import "./chunk-677O5SV4.mjs";
import {
  getAttendeeBadge
} from "./chunk-XPP6IH7G.mjs";
import {
  getEventAttendees
} from "./chunk-CGDF3LQF.mjs";
import {
  getEvent
} from "./chunk-F3J2ZDEX.mjs";
import "./chunk-OOWT7JGX.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF4es da API para o back-end",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
