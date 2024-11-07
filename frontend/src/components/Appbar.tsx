import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/user";

export const Appbar = ({
  isOnPublishPage = false,
}: {
  isOnPublishPage?: boolean;
}) => {
  const userState = useRecoilValue(userAtom);

  return (
    <div className="fixed bg-white w-full z-20 top-0 h-14 shadow-sm flex py-2 justify-between px-10 border-b">
      <div className="flex flex-col justify-center text-lg font-semibold cursor-pointer">
        <Link to={"/blogs"}>DevDaily</Link>
      </div>
      <div className="flex justify-between w-full  max-w-52 ">
        <Link to={"/publish"}>
          <button
            disabled={isOnPublishPage}
            type="button"
            className={`h-full focus:outline-none text-white font-medium rounded-lg text-sm px-5 me-2 ${
              isOnPublishPage
                ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                : "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            }`}
          >
            New Blog
          </button>
        </Link>

        <Avatar
          name={userState.username !== "" ? userState.username : "Anonymous"}
          size="big"
        />
      </div>
    </div>
  );
};
