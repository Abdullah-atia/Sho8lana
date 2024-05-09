import { useQuery } from "react-query";
 import {request} from '../utils/axios-utils'

function fetchSkill() {
        return request({url:"/Skill"})
}

function useSkills(){
    return useQuery(
        'skill', fetchSkill
    )
}
export default useSkills;
