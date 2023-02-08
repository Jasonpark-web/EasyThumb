import React from "react";
import * as S from "./Footer_Style.jsx";
import MonoLogo from "../assets/logo/logo_mono.svg";

function Footer() {
  return (
    <S.Container>
      <S.LogoWrap>
        <S.Logo src={MonoLogo} />
      </S.LogoWrap>
      <S.Text>
        © EASYTHUMB, {new Date().getFullYear()} ALL RIGHTS RESERVED.
      </S.Text>
    </S.Container>
  );
}

export default Footer;
