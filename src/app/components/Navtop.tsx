import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
export default function Navtop() {
  return (
    <section>
      <div className="w-full h-[40px]  flex items-center justify-end  pr-10 text-[13px] lg:text-[16px] font-raleway">
        <p className=" inline-flex justify-center items-center px-2 ">
          <span className="px-1">
            <MdOutlineMarkEmailUnread />
          </span>
          rmailskjabcih@gmail.com
        </p>
        <p className=" inline-flex justify-center items-center  px-2S">
          <span className="px-1">
            <FaSquarePhone />
          </span>
          +91 4654985678
        </p>
      </div>
    </section>
  );
}
