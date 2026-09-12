type SortType = 'default' | 'name' | 'gpa'

type SortControlsProps = {
  sort: SortType
  onSortChange: (sort: SortType) => void
}

function SortControls({
  sort,
  onSortChange,
}: SortControlsProps) {
  return (
    <div className="sortControls">
      <button
        className={sort === 'default' ? 'active' : ''}
        onClick={() => onSortChange('default')}
      >
        Default
      </button>

      <button
        className={sort === 'name' ? 'active' : ''}
        onClick={() => onSortChange('name')}
      >
        Name (A-Z)
      </button>

      <button
        className={sort === 'gpa' ? 'active' : ''}
        onClick={() => onSortChange('gpa')}
      >
        GPA (High-Low)
      </button>
    </div>
  )
}

export default SortControls