const TabletIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 48}
      height={props.height ?? 48}
      viewBox="0 -960 960 960"
      style={props.style}
    >
      <path
        fill="currentColor"
        d="M100-160q-24.75 0-42.37-17.63Q40-195.25 40-220v-520q0-24.75 17.63-42.38Q75.25-800 100-800h760q24.75 0 42.38 17.62Q920-764.75 920-740v520q0 24.75-17.62 42.37Q884.75-160 860-160H100Zm30-580h-30v520h30v-520Zm60 520h580v-520H190v520Zm640-520v520h30v-520h-30Zm0 0h30-30Zm-700 0h-30 30Z"
      />
    </svg>
  );
};

export default TabletIcon;
