import React, { useRef } from 'react'
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase"

export default function Add() {
    const nameRef = useRef();
    const ageref = useRef();
    const submithandler = (e) => {
        e.preventDefault();
        var userData = {
            name: nameRef.current.value,
            age: ageref.current.value
        }
        // console.log(userData);
        const ref = collection(firestore, "Users")
        try {
            var ans = addDoc(ref, userData)
        } catch (err) {
            console.log(err)
        }
        console.log(ans);

    }
    return (
        <div className='container'>
            <form onSubmit={submithandler}>
                <input type="text" placeholder="Enter your name" ref={nameRef} /><br /><br /><br />
                <input type="text" placeholder="Enter your Age" ref={ageref} /><br /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
