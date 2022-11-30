import React, { useState } from "react";
import { MapContainer, TileLayer, Circle, Polyline, Tooltip } from "react-leaflet";
import * as d3 from "d3";
import Points from '../data/gem_spatial_data.json';

const Map = () => {
  const [filteredYear, setFilteredYear] = useState<number>();
  const [filteredMonth, setFilteredMonth] = useState<number>();
  const points = Points.filter((point: any) => point.lat && point.lng && point.date && (!filteredYear || point.date.year === filteredYear) && (!filteredMonth || point.date.month === filteredMonth));

  const latLngs = points
    .filter((point: any) => point.lat && point.lng && point.date)
    .map((point: any) => [point.lat, point.lng]);

  const timeDist = d3.scaleTime<string>()
    .domain([new Date('1851-01-01'), new Date('1851-12-31'), new Date('1852-01-01'), new Date('1852-12-31'), new Date('1853-01-01'), new Date('1853-12-31')])
    .range(['MediumAquamarine', 'DarkOliveGreen', 'Violet', 'DarkMagenta', 'LightCoral', 'DarkRed']);



  return (
    <div id='map' style={{ width: '100vw', height: 'calc(100vh - 100px)' }}>
      <div>
        <button onClick={() => setFilteredYear(undefined)}>
          all years
        </button>
        <button onClick={() => setFilteredYear(1851)}>
          1851
        </button>
        <button onClick={() => setFilteredYear(1852)}>
          1852
        </button>
        <button onClick={() => setFilteredYear(1853)}>
          1853
        </button>

        <button onClick={() => setFilteredMonth(undefined)}>
          all months
        </button>
        <button onClick={() => setFilteredMonth(1)}>
          Jan
        </button>
        <button onClick={() => setFilteredMonth(2)}>
          Feb
        </button>
        <button onClick={() => setFilteredMonth(3)}>
          Mar
        </button>
        <button onClick={() => setFilteredMonth(4)}>
          Apr
        </button>
        <button onClick={() => setFilteredMonth(5)}>
          May
        </button>
        <button onClick={() => setFilteredMonth(6)}>
          Jun
        </button>
        <button onClick={() => setFilteredMonth(7)}>
          Jul
        </button>
        <button onClick={() => setFilteredMonth(8)}>
          Aug
        </button>
        <button onClick={() => setFilteredMonth(9)}>
          Sep
        </button>
        <button onClick={() => setFilteredMonth(10)}>
          Oct
        </button>
        <button onClick={() => setFilteredMonth(11)}>
          Nov
        </button>
        <button onClick={() => setFilteredMonth(12)}>
          Dec
        </button>
        
      </div>
      <MapContainer
        zoom={5}
        center={[37, -37]}
        style={{ width: '100%', height: 'calc(100vh - 200px)', marginTop: 100 }}
      >
        <TileLayer
          url='http://stamen-tiles-b.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg'
        />
        <Polyline
          positions={latLngs}
          color='white'
          weight={1}
        />
        {points.map((point: any) => (
          <Circle
            center={[point.lat, point.lng]}
            radius={(point.whale_sighting) ? 40000 : 5000}
            color={timeDist(new Date(`${point.date.year}-${(point.date.month < 10) ? '0' : ''}${point.date.month}-${(point.date.day < 10) ? '0' : ''}${point.date.day}`))}
            fillColor='white'
          >
            {(point.date.day === 1 || point.date.day === 15) && (
              <Tooltip
                content={`${point.date.year}-${(point.date.month < 10) ? '0' : ''}${point.date.month}-${(point.date.day < 10) ? '0' : ''}${point.date.day}`}
                direction='top'
                permanent
              />
            )}
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;