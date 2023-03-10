import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div
        id="social-icons"
        className="text-5xl flex justify-center gap-16 drop-shadow-md text-blue-700"
      >
        <a
          target="_blank"
          href="https://github.com/adrianpowers"
          rel="noreferrer"
        >
          <FaGithub className="transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700" />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/adrianpowers530"
          rel="noreferrer"
        >
          <FaLinkedin className="transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700" />
        </a>
        <a href="/contact">
          <AiOutlineMail className="transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700" />
        </a>
      </div>
      <p className="text-lg text-center text-blue-900 pt-3">
        Adrian Powers © 2023
      </p>
    </>
  );
}
