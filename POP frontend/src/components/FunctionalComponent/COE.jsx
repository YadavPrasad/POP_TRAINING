import StudentResults from "./StudentResults";
import { createContext } from "react"
export const ResultPublish = createContext()
const COE = () => {
    return (
        <ResultPublish.Provider value={{sgpa:"10 SGPA", cgpa : "10 CGPA"}}>
            <h1>Results are published.</h1>
            <StudentResults sgpa = "10 SGPA" cgpa = "10 CGPA" />
        </ResultPublish.Provider>
    )
}

export default COE;