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

  /**
   * Set background color for this component
   */
  backgroundColor?: string;
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
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} `}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
