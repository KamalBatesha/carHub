"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils/indenx";
function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  const handelNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex justify-center items-center gap-5 mt-10 ">
      {!isNext && (
        <CustomButton
          title="Show More"
          handelClick={handelNavigation}
          containerStyles=" bg-primary-blue text-white rounded-full"
          btnType="button"
        />
      )}
    </div>
  );
}

export default ShowMore;
