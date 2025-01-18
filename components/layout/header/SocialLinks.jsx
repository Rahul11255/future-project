import { Icons } from '@/constants/Icons';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialLinks = () => {
  return (
    <ul className="flex gap-2 justify-center items-center text-center">
      <TooltipProvider>
        <li>
          <Tooltip>
            <TooltipTrigger>
              <Icons.INSTAGRAM className="text-[18px] hover:text-primary transition-colors ease-in duration-300 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent  className="bg-secondary text-white" >Instagram</TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger>
              <Icons.FACEBOOK className="text-[18px] hover:text-primary transition-colors ease-in duration-300 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent className="bg-secondary text-white" >Facebook</TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger>
              <Icons.LINKEDIN className="text-[18px] hover:text-primary transition-colors ease-in duration-300 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent className="bg-secondary text-white" >LinkedIn</TooltipContent>
          </Tooltip>
        </li>
      </TooltipProvider>
    </ul>
  );
};

export default SocialLinks;
