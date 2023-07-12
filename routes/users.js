const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");
const multer = require("multer");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var jwt = require("jsonwebtoken");
var jwtAuth = (req, res, next) => {
  var token = req.headers.authorization;
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
    if (err) {
      res.send({ meassage: "Invalid Token" });
    } else {
      next();
    }
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("Hello Code Improved....");
});
router.get("/list", jwtAuth, userCtrl.userList);
router.get("/teacherlist", userCtrl.teacherList);
router.get("/allteacherList", userCtrl.allteacherList);
router.post("/findPan", userCtrl.findPan);
router.post("/findId", userCtrl.findId);
router.post("/findTeacher", userCtrl.findTeacher);
router.post("/schoolList", userCtrl.schoolList);
router.post("/updateStudentData", userCtrl.updateStudentData);
router.post("/schoolTeacherList", userCtrl.schoolTeacherList);
router.post("/gpSchoolList", userCtrl.gpSchoolList);
router.post("/questionList", userCtrl.questionList);
router.post("/questionRateList", userCtrl.questionRateList);
router.post("/updateQuestionStudentValue", userCtrl.updateQuestionStudentValue);
router.post("/addQuestionSchool", userCtrl.addQuestionSchool);
router.post("/delQuestionSchool", userCtrl.delQuestionSchool);
router.post("/updateTeacherGet", userCtrl.updateTeacherGet);
router.post("/regUserList", userCtrl.regUserList);
router.post("/complain", userCtrl.complain);
router.post("/viewComplain", userCtrl.viewComplain);
router.post("/noticedComplain", userCtrl.noticedComplain);

router.post("/add", userCtrl.userAdd);

router.post("/login", userCtrl.userlogin);

router.post("/emailSend", userCtrl.emailSend);
router.post("/forgotPassword", userCtrl.forgotPassword);
router.post("/updatePassword", userCtrl.updatePassword);
router.post("/updateUserData", userCtrl.updateUserData);

module.exports = router;
