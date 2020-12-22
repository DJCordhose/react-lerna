import React from "react";
import { useSelector } from "react-redux";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { selectCount } from "./features/counter/counterSlice";

import { useTranslation } from "react-i18next";
import { SwitchLanguage } from "./SwitchLanguage";

function App() {
  const { t } = useTranslation();
  const count = useSelector(selectCount);

  return (
    <div id='cnt-app' className="p-6 max-w-sm mx-auto space-x-5">
      <SwitchLanguage />
      <img src={logo} className="h-80 w-80" alt="logo" />
      <Counter />
      <p>
        {t("users", {
          date: new Date(),
          count: count,
          revenue: count * Math.PI,
        })}
      </p>
    </div>
  );
}

export default App;
