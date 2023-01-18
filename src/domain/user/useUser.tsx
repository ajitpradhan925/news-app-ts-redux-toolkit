
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../core/hooks/redux-hooks";
import { GetUser } from "../../data/api/user/user-data-source";

export const useUser = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector((state) => state.users);
    console.log("users ", users);
    
    useEffect(() => {
        GetUser();
    }, []);
}
