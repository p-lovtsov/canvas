import { chart } from './chart';
import { getChartData } from './data';
import './styles.scss';

const tgChart = chart(document.getElementById("chart"), getChartData()[0]);

tgChart.init();