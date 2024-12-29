import { Button } from "@/components/ui/button"

type Status = 'ongoing' | 'completed' | 'in-review' | 'all'

type StatusFilterProps = {
  activeFilter: Status
  setActiveFilter: (filter: Status) => void
}

export function StatusFilter({ activeFilter, setActiveFilter }: StatusFilterProps) {
  const filters: Status[] = ['all', 'ongoing', 'in-review','completed' ]

  return (
    <div className="flex space-x-2">
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          variant={activeFilter === filter ? "default" : "outline"}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </Button>
      ))}
    </div>
  )
}

