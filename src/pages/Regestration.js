import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { darkLogo } from "../assets";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

const Regestration = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  // save data for useState
  const [ClintName, setClintName] = useState("");
  const [Emaill, setEmail] = useState("");
  const [Passward, setPassward] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [errFirebase, setErrFirebase] = useState("");

  // Erorr Message
  const [ErrClintName, setErrNmae] = useState("");
  const [ErrEmail, setErrEmail] = useState("");
  const [ErrPass, setErrPaass] = useState("");
  const [errConfPss, setConfiPasss] = useState("");

  // loading State
  const [loading, setLoading] = useState(false);
  const [sucssMsg, setSucssMsg] = useState("");

  // handle function name
  const handleName = (e) => {
    setClintName(e.target.value); // to catch value
    setErrNmae(""); //to hide error when the typing value
  };

  // handle function email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(""); //to hide error when the typing value
    // setErrFirebase(" ")
  };
  // handle function passward
  const handlePasssward = (e) => {
    setPassward(e.target.value);
    setErrPaass(""); //to hide error when the typing value
  };
  // handle function confirm pass
  const handleConfPass = (e) => {
    setConfirmPass(e.target.value);
    setConfiPasss(""); //to hide error when the typing value
  };
  const handleregetration = (e) => {
    e.preventDefault();

    // Emaill Validation Start
    const validationEmail = (Emaill) => {
      return String(Emaill)
        .toLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    // submit button start
    if (!ClintName) {
      setErrNmae("Enter Your Name");
    }
    if (!Emaill) {
      setErrEmail("Enter Your Email");
      setErrFirebase("");
    } else {
      if (!validationEmail(Emaill)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!Passward) {
      setErrPaass("Enter Your Passward");
    } else {
      if (Passward.length < 6) {
        setErrPaass("Passward Must be at least  6 charachters");
      }
    }
    if (!ConfirmPass) {
      setConfiPasss("Please Confirm Passward");
    } else {
      if (ConfirmPass !== Passward) {
        setConfiPasss("Passward Not Match");
      }
    }

    // if condition ok

    if (
      ClintName &&
      Emaill &&
      validationEmail(Emaill) &&
      Passward &&
      Passward.length >= 6 &&
      ConfirmPass &&
      ConfirmPass === Passward
    ) {
      setLoading(true);
      // start code firebase
      // console.log(auth , Emaill , ClintName);
      createUserWithEmailAndPassword(auth, Emaill, Passward)
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: ClintName,
          });
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          setSucssMsg("Account Created Sucssefuly!");

          setTimeout(() => {
            navigate("/signin");
          }, 3000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setErrFirebase("Email Already In Use, tyr anothet one");
          }
          // ..
        });
      setClintName("");
      setEmail("");
      setPassward("");
      setConfirmPass("");
      setErrFirebase("");
    }

    // console.log(ClintName);
    // console.log(Emaill);
    // console.log(Passward);
    // console.log(ConfirmPass);
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[360px] mx-auto flex flex-col items-center">
          <Link to="/">
            <img class="w-32 " src={darkLogo} alt="darkLogo"></img>
          </Link>
          <div className="flex flex-col border border-zinc-200   px-4 py-1">
            <h2 className=" font-titleFont  text-3xl font-semibold text-center">
              Create Account
            </h2>
            <div className="px-2">
              <div className="flex flex-col mt-4 gap-1  ">
                <span className="text-sm font-medium">Your Name </span>
                <input
                  onChange={handleName}
                  value={ClintName}
                  className="w-full outline-none border border-zinc-400 py-1 px-3 font-sm rounded-sm
                  focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                  type="text"
                />
                {ErrClintName && (
                  <p className="text-red-600 text-sm font-semibold tracking-wide flex items-center gap-1 -mt-1.6">
                    <span className="italic font-extrabold font-titleFont text-base">
                      !
                    </span>
                    {ErrClintName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 mt-4 ">
                <span className="text-sm font-medium  ">
                  Email or mobile phone number
                </span>
                <input
                  onChange={handleEmail}
                  value={Emaill}
                  className="w-full outline-none border border-zinc-400 py-1 px-3 font-sm rounded-sm
                  focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                  type="email"
                />
                {ErrEmail && (
                  <p className="text-red-600 text-sm font-semibold tracking-wide flex items-center gap-1 -mt-1.7">
                    <span className="italic font-extrabold font-titleFont text-base">
                      !
                    </span>
                    {ErrEmail}
                  </p>
                )}

                {errFirebase && (
                  <p className="text-red-600 text-sm font-semibold tracking-wide flex items-center gap-1 -mt-1.7">
                    <span className="italic font-extrabold font-titleFont text-base">
                      !
                    </span>
                    {errFirebase}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 mt-4 ">
                <span className="text-sm font-medium  ">Passward</span>
                <input
                  onChange={handlePasssward}
                  value={Passward}
                  className="w-full outline-none border border-zinc-400 py-1 px-3 font-sm rounded-sm
                  focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                  type="password"
                />
                {ErrPass && (
                  <p className="text-red-600 text-sm font-semibold tracking-wide flex items-center gap-1 -mt-1.9">
                    <span className="italic font-extrabold font-titleFont text-base">
                      !
                    </span>
                    {ErrPass}
                  </p>
                )}
              </div>{" "}
              <div className=" gap-1 mt-4">
                <span className="text-sm font-medium">Re-enter Password</span>
                <input
                  onChange={handleConfPass}
                  value={ConfirmPass}
                  className="w-full outline-none border border-zinc-400 py-1 px-3 font-sm rounded-sm
                  focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                  type="password"
                />
                {errConfPss && (
                  <p className="text-red-600 text-sm font-semibold tracking-wide flex items-center gap-1 -mt-1.9">
                    <span className="italic font-extrabold font-titleFont text-base">
                      !
                    </span>
                    {errConfPss}
                  </p>
                )}
              </div>
              <p className=" text-xs text-gray mt-2">
                Passwords must be at least 6 characters.
              </p>
              <button
                onClick={handleregetration}
                className="w-full py-1.5 text-sm font-medium mt-4
              rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border
              border-zinc-400 active:border-yellow-800 active-shadow-amazonInput"
              >
                Continue
              </button>
              {/* loading start Here */}
              {loading && (
                <div className="flex justify-center">
                  <RotatingLines
                    visible={true}
                    height="50"
                    width="50"
                    color="#febd69"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              )}
              {sucssMsg && (
                <div>
                  <motion.p
                    initial={{y: 10 , opacity : 0}}
                    animate={{y: 0 , opacity: 1}}
                    transition={{duration: 0.5}}
                    className=" border-[1px] border-green-500 text-green-500 px-2 py-1 my-3 text-center w-full font-semibold font-titleFont"
                  >
                    {sucssMsg}
                  </motion.p>
                </div>
              )}
              <div className="text-xs mt-6">
                <span>
                  By Continuing, you agree to Amazon's{" "}
                  <span className="text-blue-600">Conditions of Use</span> and
                  <span className="text-blue-600"> Privace Notice.</span>
                </span>
                <br />
                <span>
                  Already have an account?{" "}
                  <Link to={"/signin"}>
                    <span
                      className="text-blue-600  hover:text-orange-600 cursor-pointer
                   hover:underline underline-offset-1"
                    >
                      Sign in
                      <ArrowRightIcon />
                    </span>
                  </Link>
                  Buying for work?
                  <span
                    className="text-blue-600  hover:text-orange-600 cursor-pointer
                   hover:underline underline-offset-1"
                  >
                    Create a free business account
                  </span>
                </span>
              </div>
            </div>
          </div>
        </form>
        <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 py-10">
          <div className="flex items-center justify-center gap-4   ">
            <p
              className="text-xs text-blue-600  hover:text-orange-600 cursor-pointer    
          hover:underline underline-offset-1 duration-100"
            >
              Condition Of Use
            </p>
            <p
              className="text-xs text-blue-600  hover:text-orange-600  cursor-pointer  
           hover:underline underline-offset-1 duration-100"
            >
              Privacy Notice
            </p>
            <p
              className="text-xs text-blue-600  hover:text-orange-600  cursor-pointer 
           hover:underline underline-offset-1 duration-100"
            >
              Privacy Notice
            </p>
          </div>
          <p className="text-center text-xs py-3">
            © 1996-2023, ReactBd.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regestration;
