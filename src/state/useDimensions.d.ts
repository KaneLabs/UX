export const DimensionsContext: React.Context<null>;
export function DimensionsProvider({ children, initialLayout }: {
    children: any;
    initialLayout?: string | undefined;
}): JSX.Element;
export function useDimensions(): any;
export default useDimensions;
import React from "react";
