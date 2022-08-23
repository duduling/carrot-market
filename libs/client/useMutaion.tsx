import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data: any) {
    console.log("data", data);
  }

  return [mutation, { loading, data, error }];
}
