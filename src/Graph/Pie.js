import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import axios from "axios";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const newData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const Pie = () => {
  const [dataSet, setDataSet] = React.useState([]);
  const [ageDataSet, setAgeDataSet] = React.useState([]);
  const [payDataSet, setPayDataSet] = React.useState([]);
  const [chartData, setChartData] = React.useState({});

  const getData = async () => {
    let age = [];
    let pay = [];
    const res = await axios.get(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    if (res) {
      setDataSet(res.data.data);
      console.log(dataSet);
      for (const i of dataSet) {
        age.push(parseInt(i.employee_age));
        payDataSet.push(parseInt(i.employee_salary));
      }
      setChartData({
        labels: age,
        dataSet: [
          {
            label: "level of Thinkness",
            data: pay,
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
            borderWidth: 4,
          },
        ],
      });
    } else {
      setDataSet([]);
    }
    console.log(pay, age);
  };

  const getDataBDCL = async () => {
    const res = await axios.get(
      "https://bdcl-api.herokuapp.com/api/2020/bdcl_students"
    );
    console.log(res);
  };

  React.useEffect(() => {
    // getData();
    getDataBDCL();
  }, []);
  return (
    <div
      style={{
        width: "800px",
        height: "400px",
      }}
    >
      <h2>Doughnut Example</h2>
      <Doughnut data={data} />
      <Line data={chartData} />
    </div>
  );
};

export default Pie;
