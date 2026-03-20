import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 2 * 60 * 60 * 1000, //MS
    httpOnly: true,
    sameSite: "strict",
    secure: process.NODE_ENV !== "development",
  });

  return token;
};
