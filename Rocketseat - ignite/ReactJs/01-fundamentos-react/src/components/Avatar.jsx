export function Avatar(props){

    return(
                <img class={`${props.hasBorder == true ?'w-12 h-12 border-4 border-gray-700 rounded-[8px]' : 'w-12 h-12 rounded-[8px]'}`} src={props.src} alt="" />

        )
}