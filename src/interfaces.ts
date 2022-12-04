import { Dispatch, SetStateAction } from "react";

interface ICountryRow {
  Country: string,
  NewConfirmed: number,
  NewDeaths: number,
  NewRecovered: number
}


interface Country {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  Country: string,
  Slug: string
}
interface ICountries {
  countries: Array<Country>,
  setSortBase: Dispatch<SetStateAction<'NewConfirmed' | 'NewDeaths' | 'NewRecovered' | null>>
}



interface IPagination {
  currentPage: number,
  PagesLength: number,
  moveToPage: (page: number) => void,
}

interface IPage {
  text: string | number,
  isActive?: boolean,
  moveToPage: (page: number) => void,
  page: number
}

interface IGlobalStatistics {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number
}
interface IGeneralInfo {
  globalStatistics: IGlobalStatistics
}

interface ISearchPageContext {
  loading: boolean,
  countries: Array<Country>
}


export type {
  ICountryRow,
  Country,
  ICountries,
  IPage,
  IPagination,
  IGeneralInfo,
  IGlobalStatistics,
  ISearchPageContext
}