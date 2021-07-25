import React, { useState } from "react";
import { useSelector } from "react-redux";

function collectModifiers() {
  const might = useSelector(getGeneric("might"));
  const fury = useSelector(getGeneric("fury"));
  const protection = useSelector(getGeneric("protection"));
  const vulnerability = useSelector(getGeneric("vulnerability"));

  const bannerOfStrength = useSelector(getGeneric("bannerOfStrength"));
  const bannerOfDiscipline = useSelector(getGeneric("bannerOfDiscipline"));
  const bannerOfTactics = useSelector(getGeneric("bannerOfTactics"));
  const bannerOfDefense = useSelector(getGeneric("bannerOfDefense"));

  const spotter = useSelector(getGeneric("spotter"));
  const frostSpirit = useSelector(getGeneric("frostSpirit"));
  const pinpointDistribution = useSelector(getGeneric("pinpointDistribution"));
  const assassinsPresence = useSelector(getGeneric("assassinsPresence"));
  const facetOfNature = useSelector(getGeneric("facetOfNature"));
  const riteDwarf = useSelector(getGeneric("riteDwarf"));
  const strengthInNumbers = useSelector(getGeneric("strengthInNumbers"));

  const baneSignet = useSelector(getGeneric("baneSignet"));
  const signetOfJudgment = useSelector(getGeneric("signetOfJudgment"));
  const signetOfMercy = useSelector(getGeneric("signetOfMercy"));
  const signetOfWrath = useSelector(getGeneric("signetOfWrath"));

  const exposed = useSelector(getGeneric("exposed"));
  const lightArmor = useSelector(getGeneric("lightArmor"));
}
