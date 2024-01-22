import React from 'react';
import ProgramList from "./ProgramList";

const MainContent = ({ programList, getProgramList, onRowClick, setProgramDetail }) => {
    return (
        <>
            <ProgramList
                programList={programList}
                getProgramList={getProgramList}
                onRowClick={(program) => {
                    onRowClick(program).then((detail) => setProgramDetail(program));
                }}
            />
        </>
    );
};

export default MainContent;
