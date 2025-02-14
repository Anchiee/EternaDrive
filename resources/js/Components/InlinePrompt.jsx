import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function InlinePrompt({PromptHeader, PromptText, PromptRoute})
{
  return (
  <p className="text-[.8rem] my-3">
    {PromptHeader}
    <Link 
    className="text-red-800 underline underline-offset-2 px-1"
    href={route(PromptRoute)}>{PromptText}</Link>
  </p>
)
}

InlinePrompt.propTypes = {
  PromptHeader: PropTypes.string.isRequired,
  PromptText: PropTypes.string.isRequired,
  PromptRoute: PropTypes.string.isRequired
}