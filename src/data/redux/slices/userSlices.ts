import { GetUser } from '../../api/user/user-data-source';
import { createSlice, current } from '@reduxjs/toolkit'
import { UserAPIEntity } from '../../api/user/user-entity';

type UserState = {
    // In `status` we will watch
    // if todos are being loaded.
    status: "loading" | "idle";

    // `error` will contain an error message.
    error: string | null;
    list: UserAPIEntity[];
};

const initialState: UserState = {
    list: [],
    error: null,
    status: "idle",
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: (builder) => {
        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(GetUser.pending, (state) => {
            // At that moment,
            // we change status to `loading` 
            // and clear all the previous errors:
            state.status = "loading";
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(GetUser.fulfilled,
            (state, { payload }) => {
                console.log("payload ", payload);
                
                // We add all the new todos into the state
                // and change `status` back to `idle`:
                state.list.push(...payload);
                state.status = "idle";
            });

        // When a server responses with an error:
        builder.addCase(GetUser.rejected,
            (state, { payload }: any) => {
                // We show the error message
                // and change `status` back to `idle` again.
                if (payload) state.error = payload?.message;
                state.status = "idle";
            });
    },
    reducers: {
        filterUser: (state, action) => {
            const { payload: { searchText = '' } } = action;
            let users = current(state.list);
            state.list = users.filter((user: UserAPIEntity) => {
                const user_name = user.first_name.toLowerCase();
                return user_name.includes(searchText)
            });

        },
    }
})

export const { filterUser } = userSlice.actions;

export default userSlice.reducer;