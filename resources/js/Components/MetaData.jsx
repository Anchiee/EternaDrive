import { Head } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function MetaData(props) {
    return(
        
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
            <meta property="og:image" content="https://i.ibb.co/x87D3DyP"/>
            <meta property="og:type" content="website"/> 
            <meta property="og:image:width" content="500"/>
            <meta property="og:image:height" content="500"/>
            <meta property="og:site_name" content="EternaDrive"/>
            <meta property="og:url" content="http://127.0.0.1:8000" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description}/>

            <meta name="twitter:card" content="summary_large_image"/>

            <meta property="fb:app_id" content="1605770480141375"/>

        </Head>
    )
}


MetaData.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}