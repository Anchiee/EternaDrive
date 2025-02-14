import PropTypes from "prop-types"

export default function Input(props)
{
  return(
    <input 
    type={props.InputType} 
    placeholder={props.InputPlaceholder}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-800 
    focus:border-red-800 block w-full p-2.5"
    id={props.InputId}
    onChange={props.InputOnChange}
    />
  )
}

Input.propTypes = {
  InputType: PropTypes.string.isRequired,
  InputPlaceholder: PropTypes.string,
  InputId: PropTypes.string.isRequired,
  InputOnChange: PropTypes.func.isRequired,
}