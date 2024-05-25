import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage() {
  return (
    <div className="w-full bg-gray-100 ">
      <div className="p-10">
        <h1 className="text-center text-black py-5 text-3xl">FAQ's</h1>
        <Accordion className="mb-5 w-50 text-yellow-400">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Who can Re-Register the subjects in Regular (Fall/Spring) or Summer
            Semester?
          </AccordionSummary>
          <AccordionDetails className="">
            A student receiving F or W grade in any course shall be required to
            re-register in that course.A student receiving less than or equal to
            C+ grade in a course may also re-register in that course, to improve
            his/her grade.
          </AccordionDetails>
        </Accordion>
        <Accordion className="mb-5 w-50">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How many times a subject can be registered and what is the deadline
            for improving grades?
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
}
