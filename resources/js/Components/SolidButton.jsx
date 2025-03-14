import PropTypes from "prop-types";


export default function SolidButton(props)
{
  return <button type={props.ButtonType} 
  className="w-full bg-red-800 text-white-300 rounded-md py-2 cursor-pointer text-lg
  hover:bg-red-800 transition-all">{props.ButtonText}</button>
}

SolidButton.propTypes = {
  ButtonType: PropTypes.string.isRequired,
  ButtonText: PropTypes.string.isRequired,
}