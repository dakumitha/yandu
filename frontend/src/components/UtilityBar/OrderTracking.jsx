import UtilityBox from "./UtilityBox";
import deliverytruck from "../../assets/iconoir_delivery-truck.svg";
import Icon from "../Icon";

const OrderTracking = () => {
  return (
    <UtilityBox left={1078}>
      <Icon src={deliverytruck} alt={"delivery truck icon"}></Icon>
      <div className="relative leading-[18px]">Track your order</div>
    </UtilityBox>
  );
};

export default OrderTracking;
