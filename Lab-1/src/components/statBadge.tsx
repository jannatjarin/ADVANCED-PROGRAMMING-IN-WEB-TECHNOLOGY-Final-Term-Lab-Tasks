type StatBadgeProps = {
    label: string,
    value: string | number
}

function StatBadge(props: StatBadgeProps) {
    return (
        <div className="statBadge">
            <span className="statBadge-label">{props.label}</span>
            <span className="statBadge-value">{props.value}</span>
        </div>
    )
}

export default StatBadge;