import { useState, useMemo } from "react";
import { Grid, TextField, Button, Typography, Link, Alert } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { green, red } from "@mui/material/colors";

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
  name: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

const initialState = {
  name: "",
  email: "",
  password: ""
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === "checking", [status]);
  const {
    onInputChange, formState, name, email, password,
    isFormValid, nameValid, emailValid, passwordValid } = useForm(initialState, formValidations);


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Register'>
      {/* {isFormValid && <h1>FormValid</h1>} */}
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type='text'
              name="name"
              placeholder='Nombre Completo'
              fullWidth
              autoComplete="true"
              value={name}
              error={!!nameValid && formSubmitted}
              helperText={formSubmitted && nameValid}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type='email'
              name="email"
              placeholder='correo@google.com'
              fullWidth
              autoComplete="true"
              value={email}
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted && emailValid}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Contraseña"
              type='password'
              name="password"
              placeholder='Contraseña'
              fullWidth
              autoComplete="true"
              value={password}
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted && passwordValid}
              onChange={onInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Button
                variant='contained'
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication}
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={'row'} justifyContent={'end'} sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to={'/auth/login'}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout >
  )
}
