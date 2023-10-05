import './InfoButton.css'


export const InfoButton = ({isActive, onClick}) => {
    return (
        <div onClick={() => onClick()}
             className={`arrow
             ${isActive === true ? "active" : ""}
             ${isActive === false ? "unactive" : ""}
             `} title="see more">
        </div>
    )
}