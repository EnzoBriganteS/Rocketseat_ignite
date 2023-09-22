import '../app.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header(props) {
    return(
        <div class="bg-gray-800  flex flex-row justify-center p-5 ">
                <img class="h-8" src={igniteLogo} alt="" />
        </div>
    )    
}