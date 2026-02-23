interface LogoProps {
  className?: string;
  color?: "gold" | "white" | "dark";
}

const colorMap = {
  gold: "hsl(40, 38%, 53%)",
  white: "#ffffff",
  dark: "hsl(220, 15%, 16%)",
};

const IceLogo = ({ className = "", color = "gold" }: LogoProps) => {
  const fill = colorMap[color];

  return (
    <svg
      viewBox="0 0 220 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Square icon */}
      <rect x="4" y="4" width="38" height="38" stroke={fill} strokeWidth="4" fill="none" />

      {/* ICE text */}
      <text
        x="46"
        y="30"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="28"
        fill={fill}
        letterSpacing="2"
      >
        ICE
      </text>

      {/* REALTY text */}
      <text
        x="4"
        y="56"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="24"
        fill={fill}
        letterSpacing="2"
      >
        REALTY
      </text>

      {/* & MANAGEMENT text */}
      <text
        x="4"
        y="72"
        fontFamily="Raleway, sans-serif"
        fontWeight="500"
        fontSize="11"
        fill={fill}
        letterSpacing="4"
      >
        & MANAGEMENT
      </text>
    </svg>
  );
};

export default IceLogo;
