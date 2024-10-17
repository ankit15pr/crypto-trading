import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    lable: "1 Month",
    value: 30,
  },
];

function StockChart() {
  const [activeLable, setActiveLable] = useState("1 Day");
  const searies = [
    {
      data: [
        [1726509877581, 58176.37890208296],
        [1726513446307, 57863.95250925426],
        [1726517215189, 57890.44885024387],
        [1726522229472, 57884.533124725094],
        [1726525484764, 57986.08347484864],
        [1726529204166, 58236.257445578536],
        [1726532783218, 58251.27267436425],
        [1726536122024, 57767.78226883802],
        [1726539638398, 57839.48097393634],
        [1726542950113, 58098.16699183134],
        [1726546334393, 58129.353688610405],
        [1726549626172, 58264.61830815356],
        [1726553323996, 58532.70872200161],
        [1726557123933, 58569.71835994324],
        [1726561098919, 58790.090047016616],
        [1726564918164, 58722.162538473516],
        [1726568892059, 59094.149237134654],
        [1726572224052, 59055.53531671722],
        [1726575232489, 59228.508480328026],
        [1726579382451, 59284.755003367514],
        [1726582077073, 59163.77955715653],
        [1726586765619, 61231.62129710131],
        [1726589249396, 61202.01968568921],
        [1726592419953, 60970.25348144018],
        [1726596483383, 60976.857374660656],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      strockColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLable = (value) => {
    setActiveLable(value);
  };
  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLable == item.lable ? "" : "outline"}
            onClick={() => handleActiveLable(item.lable)}
            key={item.lable}
          >
            {item.lable}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={searies}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
}

export default StockChart;
