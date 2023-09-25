"use client"
import React, { useState } from "react";
import TableOfContents from "./TableOfContents";
import { Heading } from "./tocType";

type Props = {
  headings: Heading[];
};

const TocMobile = ({ headings }: Props) => {
  const [open, setOpen] = useState(false);
  const modalClass = open ? "modal-open" : "";
  return (
    <div className="md:hidden">
      <a
        href="#my-modal-2"
        className="btn btn-circle fixed bottom-4 left-2 md:hidden text-blue-400"
        onClick={() => setOpen(true)}
      >
        TOC
      </a>
      <div className={"modal modal-bottom " + modalClass}>
        <div className="modal-box relative">
          <button
            className="btn btn-ghost btn-sm absolute left-2 top-4"
            onClick={() => setOpen(false)}
          >
            x
          </button>
          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
};

export default TocMobile;