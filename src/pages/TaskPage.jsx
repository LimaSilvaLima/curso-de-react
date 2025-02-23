import { UseSearhParams } from "react-router-dom";

function TaskPage(params) {
    const [] = useSearchParams()
    const title = useSearchParams.get("title")
    const description = useSearchParams.get("description")


     return <div className="h-screen w-screen bg-slate-500 p-6"> 
        <h1>title</h1>
        <p>description</p>
    </div>   
}
export default TaskPage