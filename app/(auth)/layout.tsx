

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div className="flex bg-dotted-pattern bg-cover justify-center h-screen w-full bg-gray-50 items-center">
            {children}
        </div>
    )
}