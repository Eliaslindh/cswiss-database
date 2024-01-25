import React from "react";
import { getUsers } from '../utils/getUsers'


export default async function AdminPage() {
    const users = await getUsers()
    async function deleteUser(id: number) {
        console.log('user: ' + id)
    }
    return (
        <div className="flex h-screen w-full p-5">
            <div className="w-1/3 h-full">
                {users.map(user => (
                    <div key={user.id}>
                        <p>{user.name} </p>
                        <p>{user.email} </p>
                        <button onClick={() => deleteUser(user.id)}></button>
                    </div>
                ))}
            </div>
            <div className="w-2/3 h-full bg-slate-300 p-5 flex justify-center flex-col items-center">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text"></input>
                    <label htmlFor="price">Price</label>
                    <input type="number"></input>
                    <label htmlFor="stock">Stock</label>
                    <input type="number"></input>
                    <label htmlFor="imgUrl">Upload image</label>
                    <input type="text"></input>
                    <button className="button bg-stone-900 text-slate-50">Send</button>
                </form>
            </div>
        </div>
    )
}