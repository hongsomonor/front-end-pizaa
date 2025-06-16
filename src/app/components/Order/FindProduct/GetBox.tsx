import Box from "@/app/components/Order/FindProduct/Box";


export default function GetBox() {

    return <div className={"bg-gray-300 py-2 px-7 rounded-[20px] max-[600px]:p-0 max-[600px]:bg-transparent"}>
        <div className={"  w-full flex justify-center items-center gap-3 max-[600px]:gap-1"}>
            <Box name={"Berger"}/>
            <Box name={"Berger"}/>
            <Box name={"Berger"}/>
            <Box name={"Berger"}/>
            <Box name={"Berger"}/>
        </div>
    </div>
}