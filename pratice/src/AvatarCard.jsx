import "./avatar.css"
function AvatarCard(details) {
    // const name = "madhavi"
    // const rollNo = "23VV1A0517"
    // const Blood = "B+"
    return (
        <div className="container">
            <img src="krishna.jpg" alt="krishna" />
            <p className="name">Name:{details.Name}</p>
             <p>Roll No:{details.RollNo}</p>
             <p>Blood TYpe:{details.Blood}</p>
             <p>DOB:{details.Birth}</p>
        </div>
    )
}
export default AvatarCard;