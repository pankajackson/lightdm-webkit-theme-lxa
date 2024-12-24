import "@/styles/SessionSelector.css"

interface Session {
  name: string
  key: string
}

interface SessionSelectorProps {
  sessions: Session[]
  onSelect: (session: string) => void
}

const SessionSelector: React.FC<SessionSelectorProps> = ({
  sessions,
  onSelect,
}) => {
  return (
    <div className="session-selector">
      <select onChange={(e) => onSelect(e.target.value)}>
        {sessions.map((session) => (
          <option key={session.key} value={session.key}>
            {session.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SessionSelector
