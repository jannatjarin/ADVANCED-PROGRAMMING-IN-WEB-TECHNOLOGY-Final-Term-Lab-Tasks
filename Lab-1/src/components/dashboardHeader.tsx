type DashboardHeaderProps = {
    title: string,
    tagline: string
}

function DashboardHeader(props: DashboardHeaderProps) {
    return (
        <header className="dashboardHeader">
            <h1>{props.title}</h1>
            <p className="tagline">{props.tagline}</p>
            <nav className="navBar">
                <a>Dashboard</a>
                <a>Students</a>
                <a>Courses</a>
                <a>Settings</a>
            </nav>
        </header>
    );
}

export default DashboardHeader;