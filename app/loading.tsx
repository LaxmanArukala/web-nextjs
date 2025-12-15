import { CircularProgress } from '@mui/material'
import React from 'react'

export default function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-3">
        <CircularProgress color="primary" size={48} thickness={4} />
        <p className="text-gray-600 font-medium">Loading lawyers...</p>
        </div>
    </div>
  )
}
