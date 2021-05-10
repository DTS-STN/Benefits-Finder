import cookie from "cookie";

export default (req, res) => {
  // update the user situation cookie
  if (req.method === "POST") {
    const situation = req.body.situation || {};

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("situation", JSON.stringify(situation), {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );
  }

  res.status(200).json({ success: true });
};
