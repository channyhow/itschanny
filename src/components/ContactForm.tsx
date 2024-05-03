import React, { useRef, useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
} from '@mui/material';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);

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
          'service_hgkesjn',
          'template_xsgu35l',
          form.current,
          'O8_eni2QDzWuo6roS',
        );
        setIsSuccess(true);
        form.current.reset();
      }
    } catch (error) {
      console.error('Email sending failed:', error);
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
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
      <Grid
        item
        xs={isMobile ? 12 : 6}
        sm={isMobile ? 6 : 12}
        md={isMobile ? 6 : 12}
        lg={isMobile ? 6 : 12}
        xl={isMobile ? 6 : 12}
      >
        <div className={`contact-form ${isMobile ? 'mobile-width' : ''}`}>
          {isSuccess && (
            <div style={{ color: 'green', marginBottom: '10px' }}>
              Thank you for your message!
            </div>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              id="user_email"
              label="Email"
              name="user_email"
              placeholder="Email…"
              required
              variant="outlined"
              sx={{
                marginBottom: '1em',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Border color on focus
                  },
                  backgroundColor: 'rgb(255,255,255,0.3)', // Background color
                },
              }}
            />
            <TextField
              id="user_name"
              label="Name"
              name="user_name"
              placeholder="Name…"
              required
              variant="outlined"
              sx={{
                marginBottom: '1em',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgb(255,255,255,0.3)', // Background color
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <TextField
              id="user_message"
              label="Message"
              name="user_message"
              placeholder="Message…"
              required
              multiline
              rows={4}
              variant="outlined"
              sx={{
                marginBottom: '1em',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgb(255,255,255,0.3)', // Background color
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                margin: '1em',
                backgroundColor: 'rgb(255,255,255,0.3)',
                color: '#FFF',
              }}
            >
              Submit
            </Button>
          </form>

          <Dialog open={isErrorDialogOpen} onClose={handleCloseErrorDialog}>
            <DialogTitle>Oopsie Daisy</DialogTitle>
            <DialogContent>
              <DialogContentText>
                There&rsquo;s something about the email address entered, could
                you have a quick look?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleCloseErrorDialog}
                sx={{
                  margin: '1em',
                  backgroundColor: 'rgb(255,255,255,0.3)',
                  color: '#FFF',
                }}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
  );
}

export default ContactForm;
