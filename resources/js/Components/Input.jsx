import PropTypes from "prop-types"

export default function Input(props)
{
  return(
    <input 
    type={props.InputType} 
    placeholder={props.InputPlaceholder}
    className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -gray-600"
    InputId={props.InputId}
    InputOnChange={props.InputOnChange}
    />
  )
}

Input.propTypes = {
  InputType: PropTypes.string.isRequired,
  InputPlaceholder: PropTypes.string.isRequired,
  InputId: PropTypes.string.isRequired,
  InputOnChange: PropTypes.func.isRequired,
}