import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ComposedChart} from "recharts";

const Grafico = ({ forecast }) => {
  const data = forecast;
  const styles = {
    containerResponsive: {
      width: "100%",
      height: "100%"
    }
  }

  return (
    <ResponsiveContainer style={styles.containerResponsive} className='pe-4 ps-0'>
      <ComposedChart data={data.slice(1)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Legend />
        <Tooltip />
        <Line type="monotone" dataKey="tempMax" stroke="#ff5101"  strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="tempMin" stroke="#0175ff" strokeWidth={2} activeDot={{ r: 8 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Grafico;