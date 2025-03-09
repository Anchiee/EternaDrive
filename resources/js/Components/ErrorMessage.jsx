import PropTypes from "prop-types"


export default function ErrorMessage(props)
{
  return <p className="text-xs text-red">{props.message}</p>
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}