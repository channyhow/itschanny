import React, { useRef, useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { CommonPageProps } from "../types";

function ContactForm({ section }: CommonPageProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const { t } = useTranslation();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const userEmail = form.current?.elements.namedItem("user_email") as HTMLInputElement;

    if (!userEmail || !emailRegex.test(userEmail.value)) {
      setIsErrorDialogOpen(true);
      return;
    }

    try {
      if (form.current) {
        await emailjs.sendForm("service_hgkesjn", "template_xsgu35l", form.current, "O8_eni2QDzWuo6roS");
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

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: section.color, // Border color for normal state
      },
      '&:hover fieldset': {
        borderColor: section.color, // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: section.color, // Border color when focused
      },
      '& .MuiInputBase-input': {
        color: section.color, // Text color for inputs and textareas
        '&::placeholder': {
          color: section.color, // Placeholder color
          opacity: 1 // Full opacity for placeholder
        }
      }
    },
    '& .MuiInputLabel-root': {
      color: section.color, // Label color
      '&.Mui-focused': {
        color: section.color, // Label color when focused
      }
    }
  };
  

  return (
    <React.Fragment>
      <div className="contact-form">
        {isSuccess && (
          <div style={{ color: section.color, marginBottom: "10px" }}>
            {t(`${section.id}.successMessage`)}
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column",    width: "100%", // full width of the viewport
    minWidth: "300px",
    maxWidth: "1200px"  }}>
          <TextField
            id="user_email"
            label={t(`${section.id}.emailLabel`)}
            name="user_email"
            placeholder={t(`${section.id}.emailPlaceholder`)}
            required
            variant="outlined"
            fullWidth
            margin="normal"
            sx={textFieldStyles}
          />
          <TextField
            id="user_name"
            label={t(`${section.id}.nameLabel`)}
            name="user_name"
            placeholder={t(`${section.id}.namePlaceholder`)}
            required
            variant="outlined"
            fullWidth
            margin="normal"
            sx={textFieldStyles}
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
            fullWidth
            margin="normal"
            sx={textFieldStyles}

          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              fontFamily:'Urbanist',
              letterSpacing: "2px",
              margin: "normal",
              backgroundColor:  "#086788",
              border:`1px solid ${section.color}`,
              "&:hover": {
                backgroundColor: "transparent",
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
            <Button onClick={handleCloseErrorDialog}>OK</Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
}

export default ContactForm;
