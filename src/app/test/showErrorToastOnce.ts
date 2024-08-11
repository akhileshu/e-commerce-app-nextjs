import { errorToast } from "@/app/_components/toast";
import { isErrorResult } from "@/types/typeguards";
import { useEffect, useRef } from "react";

export function useShowErrorToast(result: any) {
  const actionFn = () => {
    if (isErrorResult(result))
      errorToast(result.error.name, result.error.message);
  };
  const conditionFn = () => {
    return isErrorResult(result);
  };
  useRunOnceOnCondition(conditionFn, actionFn, [result]);
}

export function useRunOnceOnCondition<T>(
  conditionFn: () => boolean,
  actionFn: () => void,
  deps: T[]
): void {
  const hasRun = useRef(false);

  useEffect(() => {
    if (conditionFn() && !hasRun.current) {
      actionFn();
      hasRun.current = true;
    } else if (!conditionFn()) {
      hasRun.current = false;
    }
  }, deps);
}
