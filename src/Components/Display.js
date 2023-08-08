function Display({ userData }) {
    return (
        <div>
            <h1>{userData.login}</h1>
            <img src={userData.avatar_url} alt='profile' height="200px" />
            <a href={userData.html_url} target="blank">Profile</a>
        </div>
    )
}

export default Display