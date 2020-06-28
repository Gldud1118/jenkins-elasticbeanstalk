import {observable, action, runInAction} from 'mobx';
import {createContext} from 'react';
import {IPost} from "../models/post"
import axios, { AxiosResponse } from "axios";

class ActivityStore {
    @observable posts : Promise<IPost>[] = [];
    @observable loadingInitial = false;

    @action loadActivities = async() => {
        this.loadingInitial = true;

        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/1/posts");
            runInAction(() => {
                
            })

        }catch(error){
            console.log(error);
        }
    }


}

export default createContext(new ActivityStore())