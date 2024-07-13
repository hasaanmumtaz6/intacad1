import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLock,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import ill1 from "@/public/illustartion/ill1.svg";
import ill2 from "@/public/illustartion/ill2.svg";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  // Sign-up states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");

  // Error state
  const [registerError, setRegisterError] = useState("");

  // Sign-in credentials states
  const router = useRouter();
  const session = useSession();
  const [error, setError] = useState("");

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  async function registeruser(ev: any) {
    ev.preventDefault();
    const data = {
      name,
      username,
      email,
      password,
      usertype,
    };

    try {
      const response = await axios.post("/api/register", data);
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setRegisterError("");
      setUsertype("");
      setSignupClick(false);
    } catch (error: any) {
      if (error.response && error.response.data) {
        setRegisterError(error.response.data.message);
        setTimeout(() => {
          setRegisterError("");
        }, 10000);
      } else {
        setRegisterError("An unexpected error occurred");
      }
    }
  }

  const login = async (e: any) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    if (!username) {
      setError("Username is invalid");
      setTimeout(() => {
        setError("");
      }, 10000);
      return;
    }

    if (!password || password.length < 6) {
      setError("Password is invalid");
      setTimeout(() => {
        setError("");
      }, 10000);
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError("Invalid Username or password");
      setTimeout(() => {
        setError("");
      }, 10000);
      if (res?.url) router.replace("/");
    } else {
      setError("");
    }
  };

  // UI converter states
  const [signupClick, setSignupClick] = useState(false);

  const handleSignUp = () => {
    setSignupClick(true);
  };
  const handleSignIn = () => {
    setSignupClick(false);
  };

  return (
    <>
      <Head>
        <title>
          {signupClick ? "Register - StartupMAXIM" : "Login - StartupMAXIM"}
        </title>
      </Head>
      <div className={`container-box ${signupClick ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            {/* log-in-form */}
            <form className="sign-in-form" onSubmit={login}>
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <label htmlFor="user-log">
                  <FaUser />
                </label>
                <input type="text" placeholder="Username" id="user-log" />
              </div>
              <div className="input-field">
                <label htmlFor="pass-log">
                  <FaLock />
                </label>
                <input type="password" placeholder="Password" id="pass-log" />
              </div>
              <p className="text-[#ff00009d] pb-2">{error}</p>

              <button className="btn solid" type="submit">
                Login
              </button>

              {/* <p className="social-text">Or Sign In with Social Platform</p>
              <div className="social-media">
                <Link href="/register/#" className="social-icons">
                  <FaGoogle />
                </Link>
                <Link href="/register/#" className="social-icons">
                  <FaGithub />
                </Link>
                <Link href="/register/#" className="social-icons">
                  <FaFacebook />
                </Link>
                <Link href="/register/#" className="social-icons">
                  <FaInstagram />
                </Link>
              </div> */}
            </form>

            {/* Register-form */}
            <form className="sign-up-form" onSubmit={registeruser}>
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <label htmlFor="fullname">
                  <FaUser />
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  id="fullname"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="email">
                  <FaEnvelope />
                </label>
                <input
                  type="text"
                  placeholder="john@example.com"
                  id="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="username">
                  <FaUser />
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="pass-log">
                  <FaLock />
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="pass-log"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>

              {/* User-Type */}
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="buyer"
                    checked={usertype === "buyer"}
                    onChange={() => setUsertype("buyer")}
                    className="hidden"
                  />
                  <span
                    className={`${
                      usertype === "buyer" ? "bg-blue-600" : "bg-gray-300"
                    } relative inline-block w-[2rem] h-[1rem] transition-colors duration-200 ease-out rounded-full`}
                  >
                    <span
                      className={`${
                        usertype === "buyer" ? "translate-x-4" : "translate-x-0"
                      } absolute left-0 top-0 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ease-out`}
                    ></span>
                  </span>
                  <span className="ml-2">Buyer</span>
                </label>

                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="student"
                    checked={usertype === "student"}
                    onChange={() => setUsertype("student")}
                    className="hidden"
                  />
                  <span
                    className={`${
                      usertype === "student" ? "bg-blue-600" : "bg-gray-300"
                    } relative inline-block w-[2rem] h-[1rem] transition-colors duration-200 ease-out rounded-full`}
                  >
                    <span
                      className={`${
                        usertype === "student"
                          ? "translate-x-4"
                          : "translate-x-0"
                      } absolute left-0 top-0 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ease-out`}
                    ></span>
                  </span>
                  <span className="ml-2">Student</span>
                </label>
              </div>

              <button className="btn solid mt-4" type="submit">
                Sign up
              </button>
              {registerError && (
                <p className="text-[#ff00009d] pb-2 pt-3">
                  {registerError}, Please{" "}
                  <b onClick={handleSignIn} className="cursor-pointer">
                    Login
                  </b>
                </p>
              )}
              {/* <p className="social-text">Or Sign Up with Social Platform</p>
              <div className="social-media">
                <Link href="/register/#" className="social-icons">
                  <FaGoogle />
                </Link>
                <Link href="/register/#" className="social-icons">
                  <FaGithub />
                </Link>
                <Link href="/register/#" className="social-icons">
                  <FaFacebook />
                </Link>
                <Link href="/register/#" className="social-icons">
                  <FaInstagram />
                </Link>
              </div> */}
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New Here?</h3>
              <p>
                Create your account now to start exploring all the amazing
                features and opportunities we have to offer.
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
            <Image src={ill1} alt="log-in-ill1" className="ill-image" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                Join our community today by logging in to access exclusive
                member benefits and connect with like-minded individuals.
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
            <Image src={ill2} alt="log-in-ill1" className="ill-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
