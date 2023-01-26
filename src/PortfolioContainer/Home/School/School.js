import React, { PureComponent } from "react";
import "./School.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default class School extends PureComponent {
  render() {
    return (
      <>
        <Card
          className="school-container"
          sx={{
            maxWidth: 700,
            display: "flex",
            flexDirection: "row",
            boxShadow: 3,
          }}
        >
          <CardContent sx={{ minWidth: 400 }}>
            <Typography gutterBottom variant="h6" component="div">
              <strong>Studia:</strong>
            </Typography>
            <Typography variant="body1" color="text.first">
              National Luis University in Nowy Sącz
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              2021 - obecnie
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <strong>Studia inżynierskie informatyczne </strong>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Specjalność - Programista Aplikacji Biznesowych
            </Typography>

            <CardActions>
              <a href="https://www.wsb-nlu.edu.pl/" target="_blank">
                <Button size="small">Strona uczelni</Button>
              </a>

              <a
                href="https://www.wsb-nlu.edu.pl/pl/studia-inzynierskie-kierunek-informatyka-specjalnosc-programista-aplikacji-biznesowych"
                target="_blank"
              >
                <Button size="small">Program studiów</Button>
              </a>
            </CardActions>
          </CardContent>
          <div className="school-profile-picture">
            <div className="school-profile-picture-background"></div>
          </div>
        </Card>
      </>
    );
  }
}
