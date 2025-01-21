import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <StyledHero>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography color="primary" variant="h1" textAlign={"center"}>
              Lucas Martins
            </Typography>
            <Typography color="primary" variant="h2" textAlign={"center"}>
              I'm a Software Enginee
            </Typography>
            <Button>
              <DownloadIcon />
              Download CV
            </Button>
            <Button>
              <EmailIcon />
              Contact me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
