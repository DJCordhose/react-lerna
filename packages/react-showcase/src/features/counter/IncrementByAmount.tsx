import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  incrementAsync,
  selectInProgress,
} from "./counterSlice";

import { useTranslation } from "react-i18next";
import { AriaButton } from "../../AriaButton";

export function IncrementByAmount() {
  const inProgress = useSelector(selectInProgress);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);
  const { t } = useTranslation();

  return (
      <div className="flex justify-between border-gray-900 border-2 m-2 overflow-hidden">
        <input
          className="px-2 py-2 m-2 w-20"
          aria-label="Set increment amount"
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number.parseInt(e.target.value))}
        />
        <AriaButton
          testid="count:incrementByAmount"
          label={t("add", { mode: "sync" })}
          text={t("add", { mode: "sync" })}
          onClick={() => dispatch(incrementByAmount(incrementAmount ?? 0))}
        />
        <AriaButton
          testid="count:incrementByAmountAsync"
          label={t("add", { mode: "async" })}
          text={t("add", { mode: "async" })}
          onClick={() => dispatch(incrementAsync(incrementAmount ?? 0))}
          inProgress={inProgress['ADD_ASYNC']}
        />
      </div>
  );
}
