import "./section-title.scss"

interface SectionTimeProps{
    text: string
}

export function SectionTitle({text} : SectionTimeProps){
    return(
        <h3 className="section-title">{text}</h3>
    )
}