import { MessageResponse } from "@/types/apiTypes";
import { User } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
 

export const userAPI = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_SERVER}/api/v1/user`,
    }),
    tagTypes: ["users"],
    endpoints: (builder)=>{
        login: builder.mutation<MessageResponse, User>({
            query: (user) => ({
                url: "new",
                method: "POST",
                body: user,
              }),
              invalidatesTags: ["users"],
        })
     }
})