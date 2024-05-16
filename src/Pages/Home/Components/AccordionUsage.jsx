import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage() {
  return (
    <div className="w-full bg-gray-100 py-5">
      <div className="px-10">
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
            A student receiving F or W grade in any course shall be required
            to re-register in that course.A student receiving less than or
            equal to C+ grade in a course may also re-register in that course,
            to improve his/her grade.
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
          <AccordionDetails>
            If a student with “F” grade re-registers a course and score “F”
            again, he/she can register the course again until he/she passes the
            course.A student receiving less than or equal to C+ grade in a
            course may also re-register in that course, to improve his/her grade
            subject to a maximum of one chance within one year of the
            declaration of final semester result. The improvement of grade(s) is
            allowed within one year of the training, the coordinator’s office
            shall send the declaration of result.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className="mb-5 w-50">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </div>
    </div>
  );
}
