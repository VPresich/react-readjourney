import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  size = "large",
  background = "primary",
  icon = null,
  as = "button",
  href = "",
  auxStyles = null,
  ...props
}) => {
  const Component = as;
  return (
    <Component
      className={clsx(
        css.btn,
        css[size],
        css[background],
        auxStyles && auxStyles
      )}
      onClick={onClick}
      href={href}
      {...props}
    >
      {children}
      {icon && icon}
    </Component>
  );
};

export default Button;

// const size = ["large", ];
// const background = ["primary", "secondary", ];
