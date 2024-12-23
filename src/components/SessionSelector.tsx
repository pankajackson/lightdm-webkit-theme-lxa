import React from "react"

const SessionSelector: React.FC<{
  sessions: string[]
  onSelect: (session: string) => void
}> = ({ sessions, onSelect }) => {
  return (
    <select
      className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
      onChange={(e) => onSelect(e.target.value)}
    >
      {sessions.map((session, index) => (
        <option key={index} value={session}>
          {session}
        </option>
      ))}
    </select>
  )
}

export default SessionSelector
