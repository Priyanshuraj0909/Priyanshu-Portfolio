export interface SceneLoadingConditions {
  width: number;
  coarsePointer: boolean;
  saveData?: boolean;
  effectiveType?: string;
}

// Keep the optional renderer out of phone and constrained-network startup.
// Visitors can still request the same interactive scene explicitly.
export function shouldAutoLoadScene({ width, coarsePointer, saveData, effectiveType }: SceneLoadingConditions) {
  return width >= 760 && !coarsePointer && !saveData
    && effectiveType !== "slow-2g" && effectiveType !== "2g" && effectiveType !== "3g";
}
