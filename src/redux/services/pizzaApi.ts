import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPizza } from '../../models/pizzaTypes'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1314/' }),
  endpoints: (builder) => ({
    getPizzas: builder.query<IPizza[], string>({
      query: () => '/pizzas',
    }),
  }),
})

export const { useGetPizzasQuery } = pizzaApi
