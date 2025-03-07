const WeatherConditions = () => {
  return (
    <>
      <h3 className="text-[#A7C5BD] text-sm mb-4">Weather Conditions</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon name="temperature" />
          <span className="text-lg">72°F</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="humidity" />
          <span className="text-lg">65% Humidity</span>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-2">
        <Icon name="wind" />
        <span className="text-lg">5 mph NW</span>
      </div>
    </>
  )
} 