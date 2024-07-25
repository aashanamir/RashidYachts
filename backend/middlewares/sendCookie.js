export const sendCookie = (user, res, statusCode, msg) => {
  const token = user.getJwtToken();

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
    sameSite: 'None',
    secure: true,
    domain: '.rashidyachts-marina.com', // Adjust the domain
    path: '/', // Ensure the cookie is accessible site-wide
  };

  console.log("Setting cookie with options:", cookieOptions); // Debugging statement

  if (msg !== undefined) {
    res.status(statusCode).cookie("token", token, cookieOptions).json({
      success: true,
      user,
      message: msg,
    });
  } else {
    res.status(statusCode).cookie("token", token, cookieOptions).json({
      success: true,
      user,
    });
  }


  res.on('finish', () => {
    console.log("Response headers:", res.getHeaders());
  });
  
  console.log("Cookie set:", res.get('Set-Cookie'));
}
