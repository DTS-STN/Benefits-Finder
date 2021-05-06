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

  if (req.method === "DELETE") {
    // set the user situation cookie to expire
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("situation", req.body.situation, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
  }

  res.status(200).json({ success: true });
};
