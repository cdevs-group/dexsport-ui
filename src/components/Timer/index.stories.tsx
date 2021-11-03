import React from "react";
import TimerSimple from "./TimerSimple";

export default {
  title: "Components/Timer",
  component: [TimerSimple],
};

export const TimerBlock: React.FC = () => {
  return (
    <>
      <TimerSimple
        time={180110}
        color="green"
        texts={{
          days: "d",
          hours: "h",
          minutes: "m",
          seconds: "s",
        }}
      />
    </>
  );
};
