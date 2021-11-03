import React, { useState } from "react";
import Languages from "./Languages";

export default {
  title: "Components/DropDown",
  component: [Languages],
};

export const InputMain: React.FC = () => {
  const languages = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];
  const [select, setSelect] = useState<any>(languages[0]);

  return (
    <div style={{ maxWidth: 160 }}>
      <Languages langs={languages} setLang={setSelect} currentLang={select.code} />
    </div>
  );
};
