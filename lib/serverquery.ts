import { QueryClient } from "@tanstack/react-query";

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