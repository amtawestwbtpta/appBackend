const Users = require("../models/users");
const Teachers = require("../models/teacher");
const AllTeachers = require("../models/allteacher");
const Schools = require("../models/school");
const Questions = require("../models/question");
const Question_Rates = require("../models/question_rate");
const Complains = require("../models/complain");
var bcrypt = require("bcryptjs");
let Otp = require("../models/otp");

const userList = async (req, res) => {
  try {
    let data = await Users.find();
    res.json(data);
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};

const regUserList = async (req, res) => {
  try {
    let data = await Users.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};
const teacherList = async (req, res) => {
  try {
    let data = await AllTeachers.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};
const allteacherList = async (req, res) => {
  try {
    let data = await Teachers.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};
const questionList = async (req, res) => {
  try {
    let data = await Questions.find();
    let rate_data = await Question_Rates.find();
    res.status(200).json({ questionData: data, rateData: rate_data });
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};
const questionRateList = async (req, res) => {
  try {
    let data = await Question_Rates.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};

const schoolTeacherList = async (req, res) => {
  let school = req.body.school;
  try {
    let data = await AllTeachers.find({ school: school });
    res.status(200).json(data);
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};
const schoolList = async (req, res) => {
  console.log("Hited");
  try {
    let schoolData = await Schools.find();
    let teacherData = await AllTeachers.find();
    res.status(200).json({ schoolData: schoolData, teacherData: teacherData });
    // console.log(data)
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};
const gpSchoolList = async (req, res) => {
  // console.log(gp)
  let gp = req.body.gp;
  try {
    let schoolData = await Schools.find({ gp: gp });
    let teacherData = await AllTeachers.find({ gp: gp });
    res.status(200).json({ schoolData: schoolData, teacherData: teacherData });
    // console.log(data)
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};

const updateStudentData = async (req, res) => {
  let { _id, school, pp, i, ii, iii, iv, v } = req.body;
  let total_student = pp + i + ii + iii + iv + v;
  console.log(req.body);

  try {
    // let schoolData = await Schools.findOne({ school: school });
    let schoolData = await Schools.updateOne(
      { _id: _id },
      {
        $set: {
          school: school,
          pp: pp,
          i: i,
          ii: ii,
          iii: iii,
          iv: iv,
          v: v,
          total_student: total_student,
        },
      }
    );
    if (schoolData.modifiedCount == 1) {
      res.status(200).json({ message: "ok", data: schoolData });
    } else {
      res.status(200).json({ message: "failed", data: schoolData });
    }
    // res.status(200).json({ message: "ok", data: schoolData });
    // console.log(schoolData)
    // console.log(schoolData.modifiedCount)
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
    console.log(e);
  }
};
const updateQuestionStudentValue = async (req, res) => {
  let {
    _id,
    cl_pp_student,
    cl_1_student,
    cl_2_student,
    cl_3_student,
    cl_4_student,
    cl_5_student,
    total_student,
    payment,
    paid,
    total_rate,
  } = req.body;
  // console.log(req.body)
  // res.status(200).json({ message: "ok" });
  try {
    let questionUpdateData = await Questions.updateOne(
      { _id: _id },
      {
        $set: {
          cl_pp_student: cl_pp_student,
          cl_1_student: cl_1_student,
          cl_2_student: cl_2_student,
          cl_3_student: cl_3_student,
          cl_4_student: cl_4_student,
          cl_5_student: cl_5_student,
          total_student: total_student,
          payment: payment,
          paid: paid,
          total_rate: total_rate,
        },
      }
    );
    if (questionUpdateData.modifiedCount == 1) {
      res.status(200).json({ message: "ok", data: questionUpdateData });
    } else {
      res.status(200).json({ message: "failed", data: questionUpdateData });
    }
    // console.log(questionUpdateData.modifiedCount)
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
    console.log(e);
  }
};
const updateTeacherGet = async (req, res) => {
  let {
    _id,
    sl,
    school,
    udise,
    tname,
    tsname,
    disability,
    desig,
    hoi,
    fname,
    circle,
    question,
    gp,
    association,
    phone,
    email,
    dob,
    doj,
    dojnow,
    bank,
    account,
    ifsc,
    empid,
    training,
    pan,
    aadhaar,
    address,
    basi,
    mbasic,
    addl,
    da,
    mda,
    hra,
    mhra,
    ma,
    gross,
    mgross,
    gpf,
    gpfm,
    ptax,
    gsli,
    netpay,
    mnetpay,
    netpayword,
    arrear,
    bonus,
    lic,
    ppf,
    nsc,
    mediclaim,
    tds,
  } = req.body;
  console.log(req.body);
  try {
    let teacherUpdateData = await Teachers.updateOne(
      { _id: _id },
      {
        $set: {
          sl: sl,
          school: school,
          udise: udise,
          tname: tname,
          tsname: tsname,
          disability: disability,
          desig: desig,
          hoi: hoi,
          fname: fname,
          circle: circle,
          question: question,
          gp: gp,
          association: association,
          phone: phone,
          email: email,
          dob: dob,
          doj: doj,
          dojnow: dojnow,
          bank: bank,
          account: account,
          ifsc: ifsc,
          empid: empid,
          training: training,
          pan: pan,
          aadhaar: aadhaar,
          address: address,
          basi: basi,
          mbasic: mbasic,
          addl: addl,
          da: da,
          mda: mda,
          hra: hra,
          mhra: mhra,
          ma: ma,
          gross: gross,
          mgross: mgross,
          gpf: gpf,
          gpfm: gpfm,
          ptax: ptax,
          gsli: gsli,
          netpay: netpay,
          mnetpay: mnetpay,
          netpayword: netpayword,
          arrear: arrear,
          bonus: bonus,
          lic: lic,
          ppf: ppf,
          nsc: nsc,
          mediclaim: mediclaim,
          tds: tds,
        },
      }
    );
    // console.log(teacherUpdateData)
    if (teacherUpdateData.modifiedCount == 1) {
      res.status(200).json({ message: "ok" });
    } else {
      res.status(200).json({ message: "failed" });
    }
    // console.log(teacherUpdateData.modifiedCount)
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
    console.log(e);
  }
};
const addQuestionSchool = async (req, res) => {
  let {
    school,
    gp,
    udise,
    cl_pp_student,
    cl_1_student,
    cl_2_student,
    cl_3_student,
    cl_4_student,
    cl_5_student,
    payment,
    paid,
    total_student,
    total_rate,
  } = req.body;
  // console.log(req.body)
  // res.status(200).json({ message: "ok" });
  let questionAddData = await new Questions({
    school,
    gp,
    udise,
    cl_pp_student,
    cl_1_student,
    cl_2_student,
    cl_3_student,
    cl_4_student,
    cl_5_student,
    payment,
    paid,
    total_student,
    total_rate,
  });
  try {
    let response = await questionAddData.save();
    res.status(200).json({ message: "ok", data: response });
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
    console.log(e);
  }
};

const delQuestionSchool = async (req, res) => {
  let _id = req.body._id;
  // res.json({ message: 'ok' })
  // console.log(_id)
  try {
    let response = await Questions.deleteOne({ _id: _id });
    if (response.acknowledged) {
      res.status(200).json({ message: "ok", data: response });
    } else {
      res.status(301).json({ message: "error", data: "Something Went Wrong" });
    }
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
    console.log(e);
  }
};

const findPan = async (req, res) => {
  try {
    console.log(req.body);
    let data = await Teachers.findOne({ pan: req.body.pan });
    // res.json(data);
    if (data) {
      let fdata = await Users.findOne({ pan: req.body.pan });
      if (fdata) {
        res.status(200).json({
          message: "error",
          data: "You are Already Registered! Please go to Login",
        });
      } else {
        res.status(200).json({ message: "ok", data: data });
      }
    } else {
      res
        .status(200)
        .json({ message: "error", data: "Please Enter Correct PAN No." });
    }
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};
const findId = async (req, res) => {
  try {
    let data = await Users.findOne({ _id: req.body.id });
    // res.json(data);
    if (data) {
      res.status(200).json({ message: "Valid", data: data });
    } else {
      res
        .status(200)
        .json({ message: "Invalid", data: "Unauthorised Access!!!" });
    }
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};
const findTeacher = async (req, res) => {
  try {
    console.log(req.body);
    let data = await Teachers.findOne({ empid: req.body.empid });
    // res.json(data);
    if (data) {
      res.status(200).json({ message: "ok", data: data });
    } else {
      res.status(200).json({ message: "error", data: "No Data Found" });
    }
  } catch (e) {
    res.status(301).json({ message: "error", data: "Something Went Wrong" });
  }
};

const userAdd = async (req, res) => {
  let {
    // name,  //Removed For Firebase
    teachersID, //Added For Firebase
    id, //Added For Firebase
    username,
    email,
    // sl,  //Removed For Firebase
    tname,
    tsname,
    school,
    udise,
    desig,
    sis,
    circle,
    empid,
    photoName,
    url,
    pan,
    teacher,
    // aadhaar,  //Removed For Firebase
    loggedin,
    dpscst,
    dpsc,
    dpsc1,
    dpsc2,
    dpsc3,
    dpsc4,
    tan,
    question,
    password,
  } = req.body;
  let data = await new Users({
    // name,  //Removed For Firebase
    teachersID, //Added For Firebase
    id, //Added For Firebase
    username,
    email,
    // sl,  //Removed For Firebase
    tname,
    tsname,
    school,
    udise,
    desig,
    sis,
    circle,
    empid,
    photoName,
    url,
    pan,
    teacher,
    // aadhaar,  //Removed For Firebase
    loggedin,
    dpscst,
    dpsc,
    dpsc1,
    dpsc2,
    dpsc3,
    dpsc4,
    tan,
    question,
    password,
  });
  try {
    let response = await data.save();
    let myToken = await data.getAuthToken();
    res.status(200).json({ message: "ok", token: myToken });
  } catch (e) {
    res.status(301).json({ message: "error", data: "User Already Exists." });
  }
};
const complain = async (req, res) => {
  let { email, tname, school, sis, mobile, complain } = req.body;
  let data = await new Complains({
    email,
    tname,
    school,
    sis,
    mobile,
    complain,
    noticed: "unnoticed",
  });
  try {
    let response = await data.save();
    res.status(200).json({ message: "ok", data: response });
  } catch (e) {
    res.status(301).json({ message: "error", data: e });
  }
};
const viewComplain = async (req, res) => {
  try {
    let response = await Complains.find();
    res.status(200).json({ message: "ok", data: response });
  } catch (e) {
    res.status(301).json({ message: "error", data: e });
  }
};
const noticedComplain = async (req, res) => {
  let _id = req.body._id;
  try {
    let response = await Complains.updateOne(
      { _id: _id },
      {
        $set: {
          noticed: "noticed",
        },
      }
    );
    if (response.modifiedCount == 1) {
      res.status(200).json({ message: "ok" });
    } else {
      res.status(200).json({ message: "failed" });
    }
  } catch (e) {
    res.status(301).json({ message: "error", data: e });
  }
};

const userlogin = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res
      .status(301)
      .json({ message: "error", data: "Please Select Username/Password" });
  }
  let user = await Users.findOne({ username: req.body.username });
  var responseType = {
    message: "ok",
  };
  if (user) {
    var match = bcrypt.compareSync(req.body.password, user.password);
    if (match) {
      try {
        let myToken = await user.getAuthToken();
        let empid = user.empid;
        let teacher = await Teachers.findOne({ empid: empid });
        responseType.message = "Login Successfully";
        responseType.token = myToken;
        responseType.id = user._id;
        responseType.circle = user.circle;
        responseType.teacher = teacher;

        // res.status(200).json({ message: 'Login Successfully' });
      } catch (e) {
        res
          .status(301)
          .json({ message: "error", data: "Something Went Wrong" });
      }
    } else {
      responseType.message = "Invalid Password";
      // res.status(301).json({ message: 'error', message: "Invalid Password" });
    }
  } else {
    responseType.message = "Invalid Username";
  }
  // console.log(user);
  res.status(200).json({ message: "ok", data: responseType });
};

const emailSend = async (req, res) => {
  let rEmail = req.body.email;
  let data = await Users.findOne({ email: rEmail });
  const responseType = {};
  let otpcode = Math.floor(Math.random() * 10000 + 1);
  if (data) {
    let otpdata = new Otp({
      email: req.body.email,
      code: otpcode,
      expiresIn: new Date().getTime() + 300 * 1000,
    });
    let otpResponse = await otpdata.save();
    responseType.statusText = "Success";
    // responseType.otp = otpcode
    responseType.message = "OTP Sent, Please check your Email";
    mailer(rEmail, otpcode);
  } else {
    responseType.statusText = "Error";
    responseType.message = "Email does not Exist";
  }
  res.status(200).json(responseType);
  // console.log(otpcode)
};

const forgotPassword = async (req, res) => {
  let data = await Otp.findOne({
    email: req.body.email,
    code: req.body.otpCode,
  });
  // console.log(req.body.email)
  // console.log(req.body.otpCode)
  const responseType = {};
  if (data) {
    let currentTime = new Date().getTime();
    let difference = data.expiresIn - currentTime;
    if (difference < 0) {
      responseType.message = "Token Expired";
      responseType.statusText = "error";
    } else {
      let user = await Users.findOne({ email: req.body.email });
      user.password = req.body.password;
      user.save();
      responseType.message = "Password Changed Successfully";
      responseType.statusText = "Success";
      updmailer(req.body.email);
    }
  } else {
    responseType.message = "Invalid OTP";
    responseType.statusText = "error";
  }
  res.status(200).json(responseType);
  // console.log(responseType)
};
const updatePassword = async (req, res) => {
  let data = await Teachers.findOne({
    empid: req.body.empid,
    account: req.body.account,
  });
  // console.log(req.body.email)
  const responseType = {};
  if (data) {
    let user = await Users.findOne({
      empid: req.body.empid,
      email: req.body.email,
    });
    user.password = req.body.password;
    user.save();
    responseType.message = "Password Changed Successfully";
    responseType.statusText = "Success";
    updmailer(req.body.email);
  } else {
    responseType.message = "Invalid OTP";
    responseType.statusText = "error";
  }
  res.status(200).json(responseType);
  // console.log(responseType)
};

const updateUserData = async (req, res) => {
  let {
    tname,
    empid,
    fname,
    email,
    phone,
    account,
    pan,
    aadhaar,
    dob,
    doj,
    dojnow,
    dor,
    lic,
    hloanprincipal,
    hloaninterest,
    ppf,
    nsc,
    mediclaim,
    arrear,
    bonus,
    address,
  } = req.body;
  let teacher = await Teachers.findOne({
    empid: empid,
    account: account,
  });
  // console.log(email)
  const responseType = {};
  if (teacher) {
    let user = await Users.findOne({ empid: empid, email: email });
    user.tname = tname;
    user.email = email;
    user.aadhaar = aadhaar;
    teacher.tname = tname;
    teacher.fname = fname;
    teacher.email = email;
    teacher.aadhaar = aadhaar;
    teacher.phone = phone;
    teacher.pan = pan;
    teacher.dob = dob;
    teacher.doj = doj;
    teacher.dojnow = dojnow;
    teacher.dor = dor;
    teacher.lic = lic;
    teacher.hloanprincipal = hloanprincipal;
    teacher.hloaninterest = hloaninterest;
    teacher.ppf = ppf;
    teacher.nsc = nsc;
    teacher.mediclaim = mediclaim;
    teacher.arrear = arrear;
    teacher.bonus = bonus;
    teacher.address = address;
    teacher.save();
    user.save();

    responseType.message = "User Data Updated Successfully";
    responseType.statusText = "Success";
    // profileupdmailer(email);
  } else {
    responseType.message = "Invalid OTP";
    responseType.statusText = "error";
  }
  res.status(200).json(responseType);
  // console.log(responseType)
};

const mail = process.env.GMAIL;
const mailpassword = process.env.GMAILPASSWORD;

const mailer = (email, otp) => {
  const nodemailer = require("nodemailer");
  var smtpTransport = require("nodemailer-smtp-transport");
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: mail,
        pass: mailpassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
  );
  let mailoptions = {
    from: mail,
    to: email,
    subject: `Reset your Password: Mail no ${Math.floor(
      Math.random() * 1000 + 1
    )}`,
    text: `Your OTP is ${otp}`,
  };
  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent: " + info.response);
    }
  });
};
const updmailer = (email) => {
  const nodemailer = require("nodemailer");
  var smtpTransport = require("nodemailer-smtp-transport");
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: mail,
        pass: mailpassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
  );
  let mailoptions = {
    from: mail,
    to: email,
    subject: `Password Changed Confirmation: Mail no ${Math.floor(
      Math.random() * 1000 + 1
    )}`,
    text: `Your Password Has Been Changed Successfully. If You Haven't Changed it Own, Please contact us at ${mail} `,
  };
  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent: " + info.response);
    }
  });
};
const profileupdmailer = (email) => {
  const nodemailer = require("nodemailer");
  var smtpTransport = require("nodemailer-smtp-transport");
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: mail,
        pass: mailpassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
  );
  let mailoptions = {
    from: mail,
    to: email,
    subject: `Profile Udation Confirmation: Mail no ${Math.floor(
      Math.random() * 1000 + 1
    )}`,
    text: `Your Profile Datas Has Been Changed Successfully. If You Haven't Changed it Own, Please contact us at ${mail} `,
  };
  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent: " + info.response);
    }
  });
};

module.exports = {
  userList,
  teacherList,
  allteacherList,
  userAdd,
  userlogin,
  emailSend,
  findPan,
  findId,
  findTeacher,
  forgotPassword,
  updatePassword,
  updateUserData,
  schoolList,
  updateStudentData,
  schoolTeacherList,
  gpSchoolList,
  questionList,
  questionRateList,
  updateQuestionStudentValue,
  addQuestionSchool,
  delQuestionSchool,
  updateTeacherGet,
  regUserList,
  complain,
  viewComplain,
  noticedComplain,
};
