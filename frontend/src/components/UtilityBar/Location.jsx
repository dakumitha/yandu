import LocationIcon from "../../assets/Location.svg";
import Icon from "../Icon";
import UtilityBox from "./UtilityBox";

const Location = () => {
  return (
    <UtilityBox left={910}>
      <Icon src={LocationIcon} alt={"location icon "}></Icon>
      <div>
        <span className="relative leading-[18px]">Deliver to </span>
        <span className="font-semibold">700023</span>
      </div>
    </UtilityBox>
  );
};

export default Location;
