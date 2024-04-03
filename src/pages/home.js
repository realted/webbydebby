import React from 'react';
import {firestore} from '../firebase';
import {addDoc, collection} from 'firebase/firestore';

export default function Home() {

    const messageRef = React.useRef();
    const ref = collection(firestore, 'messages');


    const handleSave = async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value,
        }
        try{
            addDoc(ref,data);  // Refers to the collection
        }catch(e){
            console.log(e);
        }

    };


    return (
        <div>
            <form onSubmit={handleSave}>
                <label> Enter Message </label>
                <input type="text" ref={messageRef} />
                <button type="submit"> submit </button>
            </form>
        </div>
    )
    }