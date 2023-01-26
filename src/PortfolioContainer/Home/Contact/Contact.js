import { CardContent, TextField, Typography } from "@mui/material";
import React, { PureComponent } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default class Contact extends PureComponent {
  render() {
    return (
      <div>
        <Card style={{ maxWidth: 700, margin: "0 auto", padding: "20px 5px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Skontaktuj się
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Imię"
                    placeholder="Wpisz swoje imię"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Nazwisko"
                    placeholder="Wpisz swoje nazwisko"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    placeholder="Wpisz swoj email "
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="number"
                    label="Telefon (opcjonalnie)"
                    placeholder="Wpisz swoj nr telefonu "
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label="Wiadomość"
                    multiline
                    rows={4}
                    placeholder="wpisz wiadomosc tutaj "
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    onClick={() =>
                      alert(
                        "Funkcjonalność jeszcze niedostępna, w razie potrzeby kontaktu adres email znajduje się w CV"
                      )
                    }
                    variant="contained"
                    fullWidth
                  >
                    Wyślij
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
