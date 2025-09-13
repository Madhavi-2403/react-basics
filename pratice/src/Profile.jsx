function Profile() {
    const name = "madhavi"
    const age = 20
    const isstudent = true
    return (
        <div>
            <p>My name is{name}</p>
            <p>my {age}</p>
            <p>{isstudent === true ? "is a student" : "is not a student"}</p>
        </div>
    )
}
export default Profile;