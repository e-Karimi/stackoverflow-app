import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface RenderTagProps {
  _id: Number;
  name: String;
  totalQuestions?: Number;
  showCount?: Boolean;
}

export default function RenderTag({ _id, name, totalQuestions, showCount }: RenderTagProps) {
  console.log("RenderTag ~ _id, name, totalQuestions:", showCount, totalQuestions);
  return (
    <>
      <Link href={`/tags/${_id}`} className="mr-4 flex justify-between gap-2 ">
        <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
          {name}
        </Badge>

        {showCount && (
          <p className="small-medium text-dark500_light700">
            <>{totalQuestions}</>
          </p>
        )}
      </Link>
    </>
  );
}
