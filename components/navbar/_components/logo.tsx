import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <span className="ml-3 mr-2 text-xl font-bold">
          Identify<span className="text-sky-600">Me</span>
        </span>
      </Link>
    </>
  );
};

export default Logo;
