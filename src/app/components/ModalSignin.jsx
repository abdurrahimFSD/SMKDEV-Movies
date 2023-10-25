"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";

export default function DefaultModal() {
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };

    return (
        <>
        <button onClick={() => setOpenModal(true)}>
            Sign In
        </button>
        <div className={`${openModal ? 'block' : 'hidden'} bg-gray-500 w-full fixed grid item-center justify-center left-0`}>

            <div>
                <header className="grid grid-2 justify-end">
                    <div></div>
                    <button onClick={() => setOpenModal(false)}>
                        <span>Close</span>
                    </button>
                </header>
                <div>
                    <div>
                        <label htmlFor="">FullName</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
