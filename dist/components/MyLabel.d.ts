/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
