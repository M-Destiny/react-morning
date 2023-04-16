import React from 'react'
import ReduxLeft from './ReduxLeft'
import ReduxRight from './ReduxRight'


export default function ReduxStore() {
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-3'>
                    <ReduxLeft />
                </div>
                <div className='col-9'>
                    <ReduxRight />
                </div>
            </div>


        </div>
    )
}
