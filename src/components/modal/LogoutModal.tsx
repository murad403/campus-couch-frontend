import React from 'react'
import { IoWarningOutline } from 'react-icons/io5'

const LogoutModal = () => {
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-white">
                <div className='flex justify-center'>
                    <IoWarningOutline size={30} />
                </div>

                <p className="py-4 text-center text-xl font-semibold">Are you sure to logout this account</p>
                <div className="modal-action w-full">
                    <form method="dialog" className='flex justify-center w-full gap-5'>
                        <button className="border border-gray-200 py-3 px-5 rounded-xl cursor-pointer">Cancel</button>
                        <button className="bg-common-background text-red-500 px-5 py-3 cursor-pointer rounded-xl border border-gray-200">Logout</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default LogoutModal
