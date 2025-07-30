import GstCalculator from './pages/GstCalculator'
import EmiCalculator from './pages/EmiCalculator'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-8">
      <GstCalculator />
      <EmiCalculator />
    </div>
  )
}