import {
  IconMoney,
  IconStar,
  IconKnife,
  IconTargetLocation,
  IconMotorcycle,
} from "../icon-family";
import Styles from "./styles.module.css";

type DetailsItemProps = {
  rate?: number;
  reviews?: number | undefined;
  category?: string;
  price?: number;
  deliveryTime?: string;
  distance?: string;
  bonus?: string;
};

export const DetailsItem = (props: DetailsItemProps) => {
  return (
    <div className="mt-3 flex">
      {props.rate && RateComponent(props.rate, props.reviews)}
      {props.category && CategoryComponent(props.category)}
      {props.price && PriceComponent(props.price.toString())}
      {props.bonus && BonusComponent(props.bonus)}
      {props.distance && DistanceComponent(props.distance)}
      {props.deliveryTime && DeliveryTimeComponent(props.deliveryTime)}
    </div>
  );
};

const RateComponent = (rate: number, reviews: number | undefined) => (
  <div className={Styles.information}>
    <IconStar size={16} color="#FACD5D" />
    <span className="font-bold">{rate}</span>({reviews})
  </div>
);

const CategoryComponent = (category: string) => (
  <div className={Styles.information}>
    <IconKnife size={16} color="#A3A3A4" />
    {category}
  </div>
);

const PriceComponent = (price: string) => (
  <div className={Styles.information}>
    <IconMoney size={16} color="#A3A3A4" />
    {price}
  </div>
);

const BonusComponent = (bonus: string) => (
  <div className={Styles.information}>{bonus}</div>
);

const DistanceComponent = (distance: string) => (
  <div className={Styles.information}>
    <IconTargetLocation size={16} color="#A3A3A4" />
    {distance}
  </div>
);

const DeliveryTimeComponent = (deliveryTime: string) => (
  <div className={Styles.information}>
    <IconMotorcycle size={16} color="#A3A3A4" />
    {deliveryTime}
  </div>
);
