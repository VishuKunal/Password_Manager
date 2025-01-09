import React from 'react'

const Table = ({ passwordArray, setpasswordArray, form, setform }) => {


    const findUsernameById = (id) => {
        const entry = passwordArray.find(item => item.id === id);
        return entry ? entry.username : null; // Return the username if found, otherwise null
    };

    const deletePassword = async (id) => {

        let c = confirm("do you want to delete this password")
        if (c) {
            setpasswordArray(passwordArray.filter((item) => item.id !== id))
            const username = findUsernameById(id);

            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id !== id)))
            const res = await fetch("http://localhost:3000/", {
                method: "DELETE", body: JSON.stringify({
                    "username": username
                }), headers: { "Content-Type": "application/json" }
            })
        }

    }

    const editPassword = (id) => {
        console.log('save', id);
        setform(passwordArray.find((item) => item.id === id))
        setpasswordArray(passwordArray.filter((item) => item.id !== id))
    }
    return (


        <>
            <div className="flex items-center justify-center ">
                {passwordArray.length === 0 && <div>No passwords to show</div>}
                {passwordArray.length > 0 &&
                    <table className="w-3/4 table-auto ">
                        <thead className="bg-blue-400">
                            <tr>
                                <th className='px-1 py-2'>Site</th>
                                <th className='px-1 py-2'>Username</th>
                                <th className='px-1 py-2 '>Passwords</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-blue-200">
                            {passwordArray.map((item, ind) => {
                                return <tr >
                                    <td className='text-center'>
                                        <a
                                            href={item.site}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            {item.site}
                                        </a></td>
                                    <td className='text-center'>{item.username}</td>
                                    <td className='text-center'>{item.password}</td>
                                    <td className='text-center'> <span className='cursor-pointer' onClick={() => { editPassword(item.id) }}><lord-icon
                                        src="https://cdn.lordicon.com/exymduqj.json"
                                        trigger="hover"
                                        colors="primary:#121331,secondary:#e8308c"
                                        style={{ width: '30px', height: '30px' }}
                                    >
                                    </lord-icon></span>

                                        <span className='mx-2 cursor-pointer' onClick={() => { deletePassword(item.id) }} ><lord-icon
                                            src="https://cdn.lordicon.com/hwjcdycb.json"
                                            trigger="hover"
                                            colors="primary:#121331,secondary:#e8308c"

                                            style={{ width: '30px', height: '30px' }}
                                        >
                                        </lord-icon></span>

                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>
                }
            </div>

        </>
    )
}
export default Table
