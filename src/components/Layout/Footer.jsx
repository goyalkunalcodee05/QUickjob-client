import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By AD_Coding.</div>
      <div>
        {/* <Link to={"https://www.facebook.com/profile.php?id=100030535123397"} target="_blank"> */}
          {/* <FaFacebookF /> */}
        {/* </Link> */}


        {/* <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank"> */}
          {/* <FaYoutube /> */}
        {/* </Link> */}

        <Link to={"https://github.com/AbhishekDuseja"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/abhishek-duseja-8256b725a/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/abhishek_duseja/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
