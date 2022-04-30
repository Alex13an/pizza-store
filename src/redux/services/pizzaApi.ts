import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPizza, IParams } from '../../models/pizzaTypes'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: builder => ({
    getPizzas: builder.query<IPizza[], IParams>({
      query: params => ({
        url: '/pizzas',
        params,
      }),
    }),
  }),
})

export const { useGetPizzasQuery } = pizzaApi
