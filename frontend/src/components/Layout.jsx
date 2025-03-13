     Layout = ({ children }) => {
    return (
        <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center">
            <Navbar />
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default Layout;