"use client";
import { 
    AreaChart,
     Area,
      ResponsiveContainer,
      YAxis,
      XAxis,
      CartesianGrid,
      Tooltip,
      Legend,
      LineChart,
      Line,
      PieChart,
      Pie
 } from "recharts";
export default function Chart(){
    const productsale = [
        {
            name: 'john doe',
            product: 2390,
            product2: 3040
        },
        {
            name: 'john doe',
            product: 2590,
            product2: 4040
        },
        {
            name: 'john doe',
            product: 4390,
            product2: 2040
        },
        {
            name: 'john doe',
            product: 2390,
            product2: 6040
        },
        {
            name: 'john doe',
            product: 2390,
            product2: 3040
        },
        {
            name: 'john doe',
            product: 2390,
            product2: 3040
        }
    ]
    return(
        <>
            <section className="flex p-[12px] py-[25px] rounded-lg w-fit h-fit items-start justify-between ">
                    <LineChart width={830} height={500} data={productsale}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="product2" stroke="#8884d8" />
                        <Line type="monotone" dataKey="product" stroke="#82ca9d" />
                    </LineChart>
            </section>
        </>
    )
}