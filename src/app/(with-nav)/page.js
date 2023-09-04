import Feed from "@/components/HomePage/Feed/Feed";
import RightSideBar from "@/components/HomePage/RighSidebar/RightSideBar";
import LeftSideBar from "@/components/HomePage/leftSidebar/LeftSideBar";

export default function Home() {
  return (
    <div className="my-container grid lg:grid-cols-4 lg:gap-3 ">

      <div className="">
        <LeftSideBar />
      </div>

      <div className="col-span-2">
        <Feed />
      </div>

      <div >
        <RightSideBar />
      </div>

    </div>
  );
}
