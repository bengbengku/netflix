import React from "react";
import { Header } from "../components/index";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
