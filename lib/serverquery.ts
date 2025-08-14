import { QueryClient } from "@tanstack/react-query";
import { getLibdetails } from "./serverClienthelper";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000, // 1 min cache
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
} 


export function PrefectchLibdetails(queryClient:QueryClient,libid:string){ 
  // create a new controller for the request 
 const controller= new AbortController(); 
 // fetch it 
 queryClient.prefetchQuery({
  queryKey:["librarydetails", libid], 
  queryFn:()=> getLibdetails(libid,controller.signal),  
  staleTime: 1000 * 60 * 5, // cache it for 10min
 })
 
 return controller;
}