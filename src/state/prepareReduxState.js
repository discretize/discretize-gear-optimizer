import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getDistributionNew,
  getDistributionOld,
  getGeneric,
  getModifiers,
  getProfession
} from "./gearOptimizerSlice";

export function prepareInputObject() {
  const input = {
    modifiers: useSelector(getModifiers),
    tags: undefined,
    profession: useSelector(getProfession),
    weapontype: useSelector(getGeneric("weaponType")),
    affixes: useSelector(getGeneric("affixes")),
    forcedAffixes: useSelector(getGeneric("forcedSlots")),
    rankby: useSelector(getGeneric("optimizeFor")),
    minBoonDuration: useSelector(getGeneric("minBoonDuration")),
    minHealingPower: useSelector(getGeneric("minHealingPower")),
    minToughness: useSelector(getGeneric("minToughness")),
    maxToughness: useSelector(getGeneric("maxToughness")),
    maxResults: 50, // TODO MAX RESULTS
    primaryInfusion: "",
    secondaryInfusion: "",
    primaryMaxInfusions: 0,
    secondaryMaxInfusions: 0,
    percentDistribution: useSelector(getDistributionOld),
    distribution: useSelector(getDistributionNew)
  };

  return input;
}
