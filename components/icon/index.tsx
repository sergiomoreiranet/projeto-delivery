import {
  IconFire,
  IconWallet,
  IconKnife,
  IconMap,
  IconMotorcycle,
  IconStore,
  IconHome,
  IconExplorer,
  IconFavourite,
  IconGear,
  IconOrder,
  IconMail,
  IconHearth,
} from "../icon-family";

type IconBaseProps = {
  size?: string | number;
  color?: string;
  iconName: string;
};

export const IconBase = ({
  iconName,
  size,
  color,
}: IconBaseProps): JSX.Element => {
  let IconComponent: JSX.Element;

  switch (iconName) {
    case "fire":
      IconComponent = <IconFire size={size} color={color} />;
      break;

    case "store":
      IconComponent = <IconStore size={size} color={color} />;
      break;

    case "wallet":
      IconComponent = <IconWallet size={size} color={color} />;
      break;

    case "map":
      IconComponent = <IconMap size={size} color={color} />;
      break;

    case "motorcycle":
      IconComponent = <IconMotorcycle size={size} color={color} />;
      break;

    case "knife":
      IconComponent = <IconKnife size={size} color={color} />;
      break;

    case "home":
      IconComponent = <IconHome size={size} color={color} />;
      break;

    case "explorer":
      IconComponent = <IconExplorer size={size} color={color} />;
      break;

    case "order":
      IconComponent = <IconOrder size={size} color={color} />;
      break;

    case "mail":
      IconComponent = <IconMail size={size} color={color} />;
      break;

    case "gear":
      IconComponent = <IconGear size={size} color={color} />;
      break;

    case "favourite":
      IconComponent = <IconFavourite size={size} color={color} />;
      break;

    case "hearth":
      IconComponent = <IconHearth size={size} color={color} />;
      break;

    default:
      IconComponent = <IconFire size={size} color={color} />;
      break;
  }

  return IconComponent;
};
