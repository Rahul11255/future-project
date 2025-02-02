import DiscoverLayout from "@/components/layout/discover/discoverLayout";
import { stateData } from "@/constants/featureslidescontent";
import React from "react";
import Link from "next/link";  // Import Link component for navigation

async function page({ params }) {
  const { slug } = await params;

  const selectedData = stateData.filter((item) => item?.key === slug);

  console.log(selectedData[0], "selected-data");

  return (
    <div>
      {selectedData.length > 0 ? (
        <DiscoverLayout data={selectedData[0]} />
      ) : (
        <div className="text-center p-4 flex justify-center items-center flex-col h-[80vh]">
          <h2 className="text-xl font-semibold text-gray-700">
            Oops! We couldn't find the data you were looking for.
          </h2>
          <p className="mt-2 text-gray-500">
            Please try again later or check the link for accuracy.
          </p>
          {/* Explore button */}
          <Link href="/" passHref>
            <button className="mt-4 py-2 px-6 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark">
              Explore Something Else
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default page;
