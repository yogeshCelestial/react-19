import React, { Suspense } from "react";
// React.lazy loads the component slowly
const DataGridComp = React.lazy(() => import("./DataGrid"))

const SuspenseLazy = () => {
    return (
        // suspense waits until component loaded properly / shows the fallback UI
        <Suspense fallback={<h2>Grid is loading</h2>}>
            <h2>MUI X Data Grid</h2>
            <DataGridComp />
        </Suspense>
    );
};

export default SuspenseLazy;