
interface Props {
    name: string;
}

export default function Box({name} : Props) {
    return <>
        <button className={"outline-none border-none py-1.5 px-5 rounded-[50px] bg-gray-200 text-gray-700 cursor-pointer hover:bg-amber-100 max-[600px]:text-[15px] max-[600px]:py-1 max-[480px]:px-2  "}>
            {name}
        </button>
    </>
}