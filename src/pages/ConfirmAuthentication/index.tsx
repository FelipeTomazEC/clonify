import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { setSession } from '../../services/authentication';
import { Container } from './styles';

export function ConfirmAuthentication() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = location.hash
      .substr(1)
      .split('&')
      .map((param) => param.split('='))
      .reduce((acc, [key, value]) => acc.set(key, value), new Map());

    const token = params.get('access_token');
    const tokenTimeToLive = params.get('expires_in');
    const redirectToApp = () => history.push('/application/home');

    setSession(token, tokenTimeToLive, redirectToApp);
  }, [history, location]);

  return <Container />;
}
