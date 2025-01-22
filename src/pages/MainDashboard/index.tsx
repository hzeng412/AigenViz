// import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"

const MainDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Weed Pressure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
              Weed Pressure Chart
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Crop Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
              Crop Health Metrics
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Field Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
              Field Overview
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map View */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Field Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gray-100 rounded flex items-center justify-center">
            Interactive Field Map
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainDashboard;