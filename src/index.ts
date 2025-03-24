import "dotenv/config";

import jwt from "jsonwebtoken";
import { jwtSecretKey } from "./environment";

console.log(jwtSecretKey);

const payload: jwt.JwtPayload = {
  iss: "https://purpleshorts.co.in",
  sub: "Shashank",
};

const token = jwt.sign(payload, jwtSecretKey, {
  algorithm: "HS256",
});

console.log("Token", token);

try {
  const decodedPayload = jwt.verify(token, jwtSecretKey);

  console.log("Decoded Payload", decodedPayload);
} catch (e) {
  console.log("Error", e);
  ("");
}