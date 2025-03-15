import { Head } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function MetaData(props) {
    return(
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description}/>
        </Head>
    )
}


MetaData.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}