import Chart from "../../../components/chart"
export default function Income(){

    return(
        <>
           <section className='w-[85%] flex flex-col items-start gap-[30px] justify-start mt-[6%] ml-[17%]'>
                <h1 className="text-2xl font-[500] ">Income Page</h1>
                <Chart />
           </section>
        </>
    )
}