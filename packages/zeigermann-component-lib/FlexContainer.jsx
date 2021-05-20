export function FlexContainer({ children, center = false }) {
    return (<div className={`flex ${center ? "justify-center" : "justify-between"} border-gray-900 border-2 m-2 overflow-hidden`}>
      {children}
    </div>);
}
