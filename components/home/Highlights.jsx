import React from "react";
import Container from "../custom/Container";
import Heading from "../reUseComp/Heading";
import { highlightsData } from "@/constants/highlights";
import HighLightCardOne from "../reUseComp/HighLightCardOne";
import HighLightCardTwo from "../reUseComp/HighLightCardTwo";

const Highlights = () => {
  return (
    <Container className="mt-5 md:mt-10 lg:mt-16">
      <div>
        <Heading
          className="uppercase"
          p="Discover the vibrant traditions, art forms, and values that make India unique."
        >
          Highlights of Indian Culture
        </Heading>
      </div>
      <div className="flex justify-center items-center">
        <div className="md:w-[90%] lg:w-[80%] xl:w-[70%]">
          {highlightsData?.map((data, index) =>
            data.reverse !==  true ? (
              <HighLightCardOne key={index} data={data} />
            ) : (
              <HighLightCardTwo key={index} data={data} />
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default Highlights;
