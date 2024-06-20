import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IncDecButton } from "../components/IncDecButton";
import { DefaultButton } from "../components/defaultButton/DefaultButton";
import { Typography } from "../components/typography/Typography";

import style from "./AddCountForm.module.scss";
import { useState } from "react";

export const AddCountForm = () => {
  let [roomCount, setRoomCount] = useState(1);
  let [bathRoomCount, setBathRoomCount] = useState(1);

  const increaseRoomCount = () => {
    setRoomCount(roomCount + 1);
  };

  const decreaseRoomCount = () => {
    setRoomCount(roomCount - 1);
  };

  const increaseBathRoomCount = () => {
    setBathRoomCount(bathRoomCount + 1);
  };

  const decreaseBathRoomCount = () => {
    setBathRoomCount(bathRoomCount - 1);
  };

  return (
    <form className={style.form}>
      <div className={style.content}>
        <IncDecButton onClick={decreaseRoomCount} content="-" />
        <div className={style.text}>
          <Typography
            className={style.typographyText}
            children={roomCount}
            variant={"h2"}
          />
          <Typography children={"Комната"} variant={"h2"} />
        </div>
        <IncDecButton onClick={increaseRoomCount} content="+" />
      </div>
      <div className={style.content}>
        <IncDecButton onClick={decreaseBathRoomCount} content="-" />
        <div className={style.text}>
          <Typography
            className={style.typographyText}
            children={bathRoomCount}
            variant={"h2"}
          />
          <Typography children={"Санузел"} variant={"h2"} />
        </div>
        <IncDecButton onClick={increaseBathRoomCount} content="+" />
      </div>
      <DefaultButton
        className={style.button}
        text="Рассчитать"
        variant="fulfilled"
        icon={<ArrowForwardIcon />}
        size="huge"
      />
    </form>
  );
};
