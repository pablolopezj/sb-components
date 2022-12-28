import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * Label contents
   */
  label?: string;
  /**
   * How large the labele should be
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Boolean show label on uppercase or lower case
   */
  allCaps: boolean;
  /**
   * Change the color of the text
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Set color of the font
   */
  fontColor?: string;
}

/**
 * Label component
 */
export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} `}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
