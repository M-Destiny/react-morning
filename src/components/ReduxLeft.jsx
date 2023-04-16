import React from 'react'
import { useSelector } from 'react-redux';

export default function ReduxLeft() {
    const category = useSelector((state) => state['reducer1']);
    console.log(category);
    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {
                    category.map((ans) => {
                        // create a onclick fuction to pass the value of ans to the right side and filter the data  and display it
                        
                        return <li> {ans}</li>
                    })
                }
            </ul>

        </div>
    )
}

// write a program to insert value in array at index no 2 but cant use readymade function

// write a program to remove value in array at index no 2 but cant use readymade function