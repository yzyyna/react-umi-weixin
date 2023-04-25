export default (props: ICON.props) => {
  const path = require(`@/assets/svg/${props.svgName}.svg`);
  return (
    <>
      <img
        src={path}
        alt={`img ${props.svgName}.svg not get!`}
        width={props?.width}
      />
    </>
  );
};
