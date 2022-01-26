const SpinTwitter = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg className="animate-spin w-8 h-8" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{ stroke: "rgb(29, 155, 240)", opacity: "0.2" }}
        ></circle>
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{
            stroke: "rgb(29, 155, 240)",
            strokeDasharray: 80,
            strokeDashoffset: 60,
          }}
        ></circle>
      </svg>
    </div>
  );
};

export default SpinTwitter;
