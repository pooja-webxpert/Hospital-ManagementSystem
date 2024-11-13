"use client";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShareIcon from "@mui/icons-material/Share";
import SchoolIcon from "@mui/icons-material/School";
import BookSlot from "@/component/book-slot-form/book-slot-form";

// Mapping of doctor IDs to emails
const doctorMapping = {
  "Dr-John-Smith-1": "dr.johnsmith@gmail.com",
  "Dr-Emily-Johnson-2": "dr.emilyjohnson@gmail.com",
  "Dr-Michael-Brown-3": "dr.michaelbrown@gmail.com",
  "Dr-Sarah-Davis-4": "dr.sarahdavis@gmail.com",
  "Dr-David-Wilson-5": "dr.davidwilson@gmail.com",
  "Dr-Jennifer-Garcia-6": "dr.jennifergarcia@gmail.com",
  "Dr-William-Martinez-7": "dr.williammartinez@gmail.com",
  "Dr-Patricia-Rodriguez-8": "dr.patriciarodriguez@gmail.com",
  "Dr-Daniel-Hernandez-9": "dr.danielhernandez@gmail.com",
  "Dr-Linda-Lopez-10": "dr.lindalopez@gmail.com",
  "Dr-James-Gonzalez-11": "dr.jamesgonzalez@gmail.com",
  "Dr-Barbara-Perez-12": "dr.barbaraperez@gmail.com",
  "Dr-Christopher-Anderson-13": "dr.christopheranderson@gmail.com",
  "Dr-Elizabeth-Taylor-14": "dr.elizabethtaylor@gmail.com",
  "Dr-Charles-Thomas-15": "dr.charlesthomas@gmail.com",
  "Dr-Nancy-White-16": "dr.nancywhite@gmail.com",
  "Dr-Joseph-Harris-17": "dr.josephharris@gmail.com",
  "Dr-Karen-Clark-18": "dr.karenclark@gmail.com",
  "Dr-Steven-Lewis-19": "dr.stevenlewis@gmail.com",
  "Dr-Michelle-Robinson-20": "dr.michellerobinson@gmail.com",
  // Add other doctor IDs and emails here
};

const DoctorsDetail = ({ params }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    maxHeight: "90vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
  };

  // State to hold the doctor's email and id
  const [doctorEmail, setDoctorEmail] = React.useState(null);
  const [doctorId, setDoctorId] = React.useState(null);

  // Use useEffect to unwrap params promise and set doctor email
  useEffect(() => {
    if (params) {
      // Unwrap the params Promise and get the doctorId
      params.then((resolvedParams) => {
        const id = resolvedParams.id;
        setDoctorId(id);
        const doctorEmail = doctorMapping[resolvedParams.id];
        setDoctorEmail(doctorEmail);
      });
    }
  }, [params]);

  // Open and close state for modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container>
        <div className="mt-20 flex mb-10">
          <img className="ml-5" src="/doctor_male.jpg" alt="Doctor-Male" />
          <div className="ml-5 mt-10">
            <Typography className="!font-semibold" variant="h5">
              {doctorId || "Loading..."}
            </Typography>
            <Button onClick={handleOpen} className="!mt-1 book-slot">
              Book Slot
            </Button>
            <div className="border bg-teal-50 !mt-2 p-2">
              <Typography className="!font-bold flex gap-1">
                <SchoolIcon />
                Education
              </Typography>
              <Typography className="!text-sm !ml-7">
                MD Med DNB Oncology ESMO Certified Oncologist
              </Typography>
            </div>
          </div>
          <div>
            <div className="border bg-teal-50 p-3 w-96 ml-16 mt-10">
              <Typography className="!font-bold flex items-center gap-1">
                <CalendarMonthIcon />
                19 Years
              </Typography>
              <Typography className="!text-sm !ml-7">Experience</Typography>
            </div>
            <div className="border bg-teal-50 p-3 w-96 ml-16">
              <Typography className="!font-bold flex items-center gap-1 text-base">
                <CurrencyRupeeIcon />
                2000
              </Typography>
              <Typography className="!text-sm !ml-7">Fees</Typography>
            </div>
          </div>
          <div className="border border-red-800 rounded-full text-xs w-10 h-10 p-1.5 ml-16 mt-10">
            <ShareIcon />
          </div>
        </div>
        <hr />
        <div className="ml-5">
          <Typography className="!mt-3 !ml-5 !font-semibold" variant="h6">
            About
          </Typography>
          <Typography className="!mt-1 !ml-5">
            ONCOLOGIST & HEMAT- Oncologist Special interest in Immunotherapy &
            Targeted Therapy for Cancers. Chemotherapy for Breast CA. Colon CA.
            Lung CA Stage IV Carcinomas Lymphoma myeloma Leukemia CML CLL.& Bone
            Marrow Expert
          </Typography>
        </div>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Pass the doctor’s email to the BookSlot component */}
          <BookSlot doctorEmail={doctorEmail} handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default DoctorsDetail;
