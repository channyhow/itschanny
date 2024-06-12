import React, { useRef, useState, useEffect } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { CommonPageProps } from "../types";

function ContactForm({ section }: CommonPageProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);
  const { t } = useTranslation();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const userEmail = form.current?.user_email?.value;

    if (!userEmail || !emailRegex.test(userEmail)) {
      setIsErrorDialogOpen(true);
      return;
    }

    try {
      if (form.current) {
        await emailjs.sendForm(
          "service_hgkesjn",
          "template_xsgu35l",
          form.current,
          "O8_eni2QDzWuo6roS"
        );
        setIsSuccess(true);
        form.current.reset();
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setIsErrorDialogOpen(true);
    }
  };

  const handleCloseErrorDialog = () => {
    setIsErrorDialogOpen(false);
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div>
      <Grid
        item
        xs={isMobile ? 12 : 6}
        sm={isMobile ? 6 : 12}
        md={isMobile ? 6 : 12}
        lg={isMobile ? 6 : 12}
        xl={isMobile ? 6 : 12}
      >
        <div className={`contact-form ${isMobile ? "mobile-width" : ""}`}>
          {isSuccess && (
            <div style={{ color: "green", marginBottom: "10px" }}>
              {t(`${section.id}.successMessage`)}
            </div>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              id="user_email"
              label={t(`${section.id}.emailLabel`)}
              name="user_email"
              placeholder={t(`${section.id}.emailPlaceholder`)}
              required
              variant="outlined"
              sx={{
                marginBottom: "1em",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "1px solid black", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "1px solid black", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "1px solid black", // Border color on focus
                  },
                  backgroundColor: "rgb(255,255,255,0.3)", // Background color
                },
              }}
            />
            <TextField
              id="user_name"
              label={t(`${section.id}.nameLabel`)}
              name="user_name"
              placeholder={t(`${section.id}.namePlaceholder`)}
              required
              variant="outlined"
              sx={{
                marginBottom: "1em",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgb(255,255,255,0.3)", // Background color
                  "& fieldset": {
                    borderColor: "1px solid black",
                  },
                  "&:hover fieldset": {
                    borderColor: "1px solid black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "1px solid black",
                  },
                },
              }}
            />
            <TextField
              id="user_message"
              label={t(`${section.id}.messageLabel`)}
              name="user_message"
              placeholder={t(`${section.id}.messagePlaceholder`)}
              required
              multiline
              rows={4}
              variant="outlined"
              sx={{
                marginBottom: "1em",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgb(255,255,255,0.3)", // Background color
                  "& fieldset": {
                    borderColor: "1px solid black",
                  },
                  "&:hover fieldset": {
                    borderColor: "1px solid black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "1px solid black",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                margin: "1em",
                backgroundColor: "#DD6144",
                fontSize: "1rem",
                letterSpacing: "2px",
                color: "black",
                fontFamily: "Urbanist",
                border: "1px solid black",
                "&:hover": {
                  backgroundColor: "#CECA48", // Set hover background color
                },
              }}
            >
              {t(`${section.id}.submitButton`)}
            </Button>
          </form>

          <Dialog open={isErrorDialogOpen} onClose={handleCloseErrorDialog}>
            <DialogTitle>{t(`${section.id}.errorTitle`)}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {t(`${section.id}.errorMessage`)}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleCloseErrorDialog}
                sx={{
                  margin: "1em",
                  backgroundColor: "rgb(255,255,255,0.3)",
                  color: "#FFF",
                }}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </div>
  );
}

export default ContactForm;
