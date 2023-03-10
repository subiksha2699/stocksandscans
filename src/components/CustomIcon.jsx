import React from "react";
import * as FontAwesome from "react-icons/fa";
import * as AntIcon from "react-icons/ai";
import * as MaterialIcon from "react-icons/md";
import * as BootstrapIcon from "react-icons/bs";
import * as RemixIcon from "react-icons/ri";
import * as IcoMoon5Icon from "react-icons/io5";
import * as IcoMoonIcon from "react-icons/io";
import * as BoxIcon from "react-icons/bi";
import * as HeroIcon from "react-icons/hi";
import * as GitIcon from "react-icons/go";
import * as Feather from "react-icons/fi";
import * as VSCIcon from "react-icons/vsc";
import * as FlatColor from "react-icons/fc";


// { iconSrc, isSelected, onClick }
function CustomIcon(props) {
  return (
    <>
      {props.isSelected ? (
        <Icon {...props} icon={props.hoverIcon} />
      ) : (
        <div style={{
            alignItems: "center",
            "&:hover": {
              "& $outlineIcon": {
                display: "none",
              },
              "& $filledIcon": {
                display: "flex",
              },
            },
          }}>
          <span style={{display:"none"}}>
            <Icon {...props} icon={props.icon || props.hoverIcon} />
          </span>
          <span style={{display:"none"}}>
            <Icon {...props} icon={props.hoverIcon || props.icon} />
          </span>
        </div>
      )}
    </>
  );
}
export default CustomIcon;
export const Icon = (props) => {
  // const { SvgIcon } = useDynamicSVGImport("test");
  let iconSrc = "MdDoNotDisturb";
  let icon = MaterialIcon[iconSrc];
  if (props.icon?.split(".").length === 2) {
    iconSrc = props.icon?.split(".")[1];
    switch (props.icon?.split(".")[0]) {
      case "FontAwesome":
        icon = FontAwesome[iconSrc];
        break;
      case "AntIcon":
        icon = AntIcon[iconSrc];
        break;
      case "MaterialIcon":
        icon = MaterialIcon[iconSrc];
        break;
      case "BootstrapIcon":
        icon = BootstrapIcon[iconSrc];
        break;
      case "RemixIcon":
        icon = RemixIcon[iconSrc];
        break;
      case "VSCIcon":
        icon = VSCIcon[iconSrc];
        break;
      case "FlatColor":
        icon = FlatColor[iconSrc];
        break;
      case "IcoMoon5Icon":
        icon = IcoMoon5Icon[iconSrc];
        if (iconSrc === "IoMdCheckmark") {
          icon = IcoMoonIcon[iconSrc];
        }
        break;
      case "IcoMoonIcon":
        icon = IcoMoonIcon[iconSrc];
        break;
      case "BoxIcon":
        icon = BoxIcon[iconSrc];
        break;
      case "HeroIcon":
        icon = HeroIcon[iconSrc];
        break;
      case "GitIcon":
        icon = GitIcon[iconSrc];
        break;
      case "Feather":
        icon = Feather[iconSrc];
        break;
      default:
        icon = MaterialIcon["MdDoNotDisturb"];
    }
    if (!icon) {
      icon = MaterialIcon["MdDoNotDisturb"];
    }
  }
  return (
    <div style={{ display: "flex" }}>
      {React.createElement(icon, {
        style: props.style,
        className: props.className,
        onClick: props.onClick,
      })}
    </div>
  );
};
