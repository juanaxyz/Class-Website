import { useState } from "react";
import Swal from "sweetalert2";

function Message(){

    const [user,setUser] = useState(
        {
            NameFrom: "",NameTo : "",Message:""
        }
    )

    let name,value;
    console.log(user);
    const data = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})

    }

const Getdata = async (e)=>{
    const {NameFrom, NameTo, Message} = user;
    e.preventDefault();
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            NameFrom, NameTo, Message
        })
    }

    const res = await fetch(
        'https://project-web-kelas-1d06e-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json',
        options
        )

        console.log(res)
        if (res){
            Swal.fire('Sukses', 'Pesan berhasil dikirim', 'success')
        }else{
            Swal.fire('Error', 'Gagal mengirim pesan', 'error')
        }
}

    return(
        <>
            
                <form method="post" className="p-5 bg-gray-700 rounded-xl flex flex-col justify-center ">
                    <input type="text" name="NameFrom" placeholder="Dari Siapa" value={user.NameFrom} autoComplete="off" required onChange={data} className="mx-3 my-6 bg-transparent border-0 outline-0 border-b border-black"/>
                    <input type="text" name="NameTo" placeholder="Untuk Siapa" value={user.NameTo} autoComplete="off" required onChange={data} className="mx-3 my-6 bg-transparent border-0 outline-0 border-b border-black"/>
                    <textarea type="text" name="Message" placeholder="Pesan Kamu" value={user.Message} autoComplete="off" required className="mx-3 my-6 bg-transparent border-0 outline-0 border-b border-black resize-none" onChange={data} />
                    <button onClick={Getdata} className="w-[100px] px-3 ml-1 cursor-pointer border-0 outline-none bg-sky-300 rounded-md" >Kirim Pesan</button>
                </form>
        </>
    )
}

export default Message;