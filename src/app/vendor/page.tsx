import React from 'react'
import Card from '../../components/card/card'
import Table from '../../components/payments/table'
export default function Vendor(){
    
    return(
        <>
            <section className='w-[85%] flex flex-col items-center justify-center mt-[6%] ml-[17%]'>
                <Card />
                <Table />
            </section>
        </>
    )
}