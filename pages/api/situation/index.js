import cookie from "cookie";

export default (req, res) => {
  console.log(req.body);
  // if (req.method === "GET") {
  // }
  // set the user info cookie
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("situation", req.body.situation, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    })
  );

  res.status(200).json({ success: true });
};
