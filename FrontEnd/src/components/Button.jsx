/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  setShowLogin,
  children,
  href = "#",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "tracking-wide inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 link Button text-[16px] phone:text-[16px] font-bold leading-none capitalize transition-all duration-[300ms] bg-btn-bg-main rounded-[15px] perspective-1000 overflow-hidden z-[10000] gap-[30px] h-[50px]";

  const variantStyles = {
    primary: "text-white bg-green-500 border-[1px] hover:bg-[#072032]",
    secondary: "text-white bg-primary border-[1px] hover:bg-green-500",
    danger: "text-red-500 bg-transparent hover:bg-red-500 hover:bg-green-600",
  };

  const sizeStyles = {
    esm: "px-3 py-[0px] text-sm",
    sm: "px-3 py-[0px] text-md",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    {
      "opacity-50 pointer-events-none": disabled,
    },
    className
  );
  const handleClick = () => {
    if (!disabled) {
      setShowLogin(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      href={href}
      className={classes}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <span className="btn-span" data-text={children}>
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "esm"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;