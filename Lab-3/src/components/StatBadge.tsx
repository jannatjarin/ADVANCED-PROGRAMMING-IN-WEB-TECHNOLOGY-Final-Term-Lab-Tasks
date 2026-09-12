type StatBadgeProps = {
  label: string
  value: string | number
}

function StatBadge({
  label,
  value,
}: StatBadgeProps) {
  return (
    <div className="statBadge">
      <span>{label}</span>

      <strong>{value}</strong>
    </div>
  )
}

export default StatBadge