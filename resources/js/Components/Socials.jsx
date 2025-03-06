import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Socials() {
    return(
        <div className="flex text-base justify-between mt-5 text-gray-900 border-t-[1px] border-gray-300 pt-4">
            <a href={route("github.redirect")} 
            className="flex gap-2 items-center border-2 rounded-xl py-2 px-2 hover:shadow-sm transition-all cursor-pointer">
            <FontAwesomeIcon icon={faGithub}/>
            Github
            </a>

            <a className="flex gap-2 items-center border-2 rounded-xl py-2 px-2 hover:shadow-sm transition-all cursor-pointer" 
            href={route("discord.redirect")}>
            <FontAwesomeIcon icon={faDiscord}/>
            Discord
            </a>
      </div>
    )
}