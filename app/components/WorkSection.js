const WorkSection = ({ id, activeTab, children }) => {
    return (
        activeTab === id ? <div>{children}</div> : null
    );
};

export default WorkSection