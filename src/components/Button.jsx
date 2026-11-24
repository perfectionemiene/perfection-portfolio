import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ...rest
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  // Internal route
  if (to) {
    return (
      <Link to={to} viewTransition className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  // External link (opens in a new tab). mailto: and tel: links stay in the same tab.
  if (href) {
    const isWeb = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(isWeb && { target: "_blank", rel: "noopener noreferrer" })}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-busy={disabled || undefined}
      {...rest}
    >
      {children}
    </button>
  );
}