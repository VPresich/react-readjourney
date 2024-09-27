import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import css from "./PieChart.module.css";

Chart.register(ArcElement, Tooltip);

const PieChart = ({ percentageRead, pagesRead }) => {
  const activeColor = "#30b94d";
  const inactiveColor = "#1f1f1f";

  const data = {
    datasets: [
      {
        data: [percentageRead, 100 - percentageRead],
        backgroundColor: [activeColor, inactiveColor],
        borderWidth: 0,
        borderRadius: percentageRead >= 100 ? 0 : 10,
      },
    ],
  };

  const options = {
    cutout: "80%",
  };

  return (
    <div className={css.container}>
      <div className={css.pieContainer}>
        <Pie data={data} options={options} />
        <div className={css.text}>100%</div>
      </div>
      <div className={css.legend}>
        <span className={css.label}></span>
        <div className={css.legendInfo}>
          <span className={css.value}>{percentageRead} %</span>
          <span className={css.legendText}>{pagesRead} pages read </span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
