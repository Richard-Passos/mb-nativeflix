/* Get format hours/minutes or minutes */
export default (runtime) => {
  const runtimeHour = Math.trunc(runtime / 60);
  return (
    runtime &&
    (runtime >= 60
      ? `${runtimeHour}h ${runtime - runtimeHour * 60}m`
      : `${runtime}m`)
  );
};
