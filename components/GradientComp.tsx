export const LineGradient = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] mask-b-from-80% bg-size-[10px_10px] bg-fixed"></div>
  );
};

export const DottedGradient = () => {
  return (
    <div className="bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)] bg-size-[10px_10px]"></div>
  );
};
