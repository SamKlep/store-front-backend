import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.post('/siginin', async (req, res) => {

  const signInUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if(signInUser) {
    res.send({
      _id: signInUser.id,
      name: signInUser.name,
      email: signInUser.email,
      isAdmin: signInUser.isAdmin,
      token: getToken(user)
    })
  } else {
    res.status(401).send({msg: 'Invalid Email or Password.'});
  }

});

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Samuel",
      email: "samklepdev@gmial.com",
      password: "123456",
      isAdmin: true,
    });

    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;