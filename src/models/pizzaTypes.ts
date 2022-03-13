export interface IPizza {
  id: number
  imageUrl: string
  name: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export interface IFilter {
  type: string
  desc: string
}

export interface IParams {
  category?: number
  _sort: string
}
