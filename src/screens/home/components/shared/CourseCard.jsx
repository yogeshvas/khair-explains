import React from "react";
import { EvervaultCard, Icon } from "../../../../components/ui/evervault-card";
import { Button } from "@/components/ui/button";

export function EvervaultCardDemo({ title, desc, to, tag1, tag2 }) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] mb-10">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text={title} />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        {desc}
      </h2>
      <div className="mt-2 w-full">
        <Button className="w-full ">Go to course page </Button>
      </div>

      <div className="flex gap-4 items-center justify-center w-full">
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          {tag1}
        </p>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          {tag2}
        </p>
      </div>
    </div>
  );
}
