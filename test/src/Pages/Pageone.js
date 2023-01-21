import React from "react";
import { useTranslation } from "react-i18next";
function Pageone() {
  const { t } = useTranslation();
  return (
    <div class="alert alert-success" role="alert">
      <h1 class="display-1">{t("Navbar.welcome.watches")}</h1>
    </div>
  );
}

export default Pageone;
