import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { onInputChange, email, password, formState } = useForm({
    email: "",
    password: ""
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);
  //*console.log(isNotAuthenticaded);
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  const onLogin = () => {
    dispatch(startLoginWithEmailPassword(formState));
  }
  return (
    <AuthLayout title='Login'>

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type='email'
              name='email'
              value={email}
              placeholder='correo@google.com'
              fullWidth
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Contraseña"
              type='password'
              name='password'
              value={password}
              autoComplete='true'
              placeholder='Contraseña'
              fullWidth
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
                onClick={onLogin}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} display={!!errorMessage ? '' : 'none'} >
              <Alert
                severity='error'
              >
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography variant='p' sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction={'row'} justifyContent={'end'} sx={{ mt: 2 }}>
            <Link component={RouterLink} color='inherit' to={'/auth/register'}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout >
  )
}
